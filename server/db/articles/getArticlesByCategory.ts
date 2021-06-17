import { db } from '../connection';
import { Article } from '../../../models';
import { getAllReactionsByArticleId } from '..';

/**
 * Gets all articles by category from "articles" - collection
 */
export async function getArticlesByCategory(category: string) {
    const articles: Article[] = await new Promise((resolve, reject) => {
        db.collection("articles").where('categories', 'array-contains', category).orderBy('created', 'desc').get().then(async snapshot => {
            let docs: Article[] = []
            snapshot.docs.forEach(async doc => {
                let data: Article = doc.data() as Article;
                data.docId = doc.id;
                docs.push(data as Article);
            });
            for(let i = 0; i < docs.length; i++) {
                const reactions = await getAllReactionsByArticleId(docs[i].docId);
                docs[i].reactions = reactions;
            }
            resolve(docs);
        });
    });
    return articles;
}