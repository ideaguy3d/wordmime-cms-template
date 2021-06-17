import { Article } from '../../../models';
import { db } from '../connection';
import { updateSw } from '../meta/updateSw';

/**
 * Updates an article
 */
export async function updateArticle(article: Article) {
    article.edited = new Date();
    const update = await new Promise<boolean>((resolve, reject) => {
        db.collection("articles").doc(article.docId).set(article, { merge: true }).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    updateSw();
    return update;
}