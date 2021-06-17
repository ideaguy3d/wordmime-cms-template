import { db } from '../connection';
import { Article } from '../../../models';

/**
 * Gets article by slug from "articles" - collection
 */
export async function getArticleBySlug(slug: string) {
    const article: Article = await new Promise((resolve, reject) => {
        db.collection("articles").where('slug', '==', slug).get().then(snapshot => {
            if (!snapshot.docs.length) return reject('Article not found.');
            let doc = snapshot.docs[0].data() as Article;
            resolve(doc);
        });
    });
    return article;
}