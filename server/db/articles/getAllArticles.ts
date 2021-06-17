import { db } from '../connection';
import { Article } from '../../../models';

/**
 * Gets all articles from "articles" - collection
 */
export async function getAllArticles() {
    const articles: Article[] = await new Promise((resolve, reject) => {
        db.collection("articles").orderBy('created', 'desc').get().then(async snapshot => {
            let docs: Article[] = []
            snapshot.docs.forEach(doc => {
                let data: Article = doc.data() as Article;
                data.docId = doc.id;
                docs.push(data as Article);
            });
            resolve(docs);
        });
    });
    return articles;
}