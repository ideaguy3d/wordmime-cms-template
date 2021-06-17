import { updateSw } from '../meta/updateSw';
import * as admin from 'firebase-admin';
import { db } from '../connection';

/**
 * Add new article category
 */
export async function addArticleCategory(category: string) {
    const arrayUnion = admin.firestore.FieldValue.arrayUnion;
    const add = await new Promise<boolean>((resolve, reject) => {
        db.collection("meta").doc('categories').set({ articleCategories: arrayUnion(category) }, { merge: true }).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    updateSw();
    return add;
}