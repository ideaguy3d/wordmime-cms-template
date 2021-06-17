import { Article } from '../../../models';
import { db } from '../connection';
import { updateSw } from '../meta/updateSw';

/**
 * Creates a new article
 */
export async function createArticle(article: Article) {
    article.created = new Date();
    article.edited = new Date();
    article.published = new Date();
    const create = await new Promise<boolean>((resolve, reject) => {
        db.collection("articles").doc().create(article).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    updateSw();
    return create;
}