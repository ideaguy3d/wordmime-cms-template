import { Reaction } from '../../../models';
import { auth, db } from '../connection';

/**
 * Get all reactions by article id without UIDs
 */
export async function getAllReactionsByArticleId(articleId: string) {
    const reactions: Reaction[] = await new Promise((resolve, reject) => {
        db.collection("reactions").where('articleId', '==', articleId).orderBy('created', 'desc').get().then(async snapshot => {
            let docs: Reaction[] = []
            snapshot.docs.forEach(doc => {
                let data = doc.data() as Reaction;
                data.docId = doc.id;
                docs.push(data);
            });
            for(let i = 0; i < docs.length; i++) {
                const reactionAuthorData = await auth.getUser(docs[i].uid);
                docs[i].authorDisplayName = reactionAuthorData.displayName;
                docs[i].authorPhotoUrl = reactionAuthorData.photoURL;
                delete docs[i].uid;
            }
            resolve(docs);
        });
    });
    return reactions;
}