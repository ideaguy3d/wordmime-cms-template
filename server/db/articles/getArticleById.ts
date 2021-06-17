import { db } from '../connection';
import { Article } from '../../../models';

/**
 * Gets article by docId from "articles" - collection
 */
export async function getArticleById(docId: string) {
    const article: Article = await new Promise((resolve, reject) => {
        db.collection("articles").where('docId', '==', docId).get().then(snapshot => {
            if (!snapshot.docs) reject(null);
            let doc = snapshot.docs[0].data() as Article;
            resolve(doc);
        });
    });
    return article;
}