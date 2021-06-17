import * as admin from 'firebase-admin';
import { db } from '../connection';
import { getArticlesByCategory } from './getArticlesByCategory';
import { updateArticle } from './updateArticle';
import { updateSw } from '../meta/updateSw';

/**
 * Remvoe category
 */
export async function removeCategory(category: string) {
    const arrayRemove = admin.firestore.FieldValue.arrayRemove;
    const articles = await getArticlesByCategory(category);
    await new Promise<boolean>((resolve, reject) => {
        db.collection("meta").doc('categories').set({ articleCategories: arrayRemove(category) }, { merge: true }).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    await new Promise(async (resolve, reject) => {
        for(let i = 0; i < articles.length; i++) {
            const article = articles[i];
            article.categories = article.categories.filter(cat => cat !== category);
            await updateArticle(article);
        }
        resolve(true);
    });
    updateSw();
    return true;
}