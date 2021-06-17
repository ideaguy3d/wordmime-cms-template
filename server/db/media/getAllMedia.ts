import { db } from '../connection';
import { Media } from '../../../models';

/**
 * Gets all media data from "media" -collection
 */
export async function getAllMedia() {
    const users: Media[] = await new Promise((resolve, reject) => {
        db.collection("media").get().then(snapshot => {
            let docs = []
            snapshot.docs.forEach(doc => {
                let docData: Media = doc.data() as Media;
                docs.push(docData);
            });
            resolve(docs);
        });
    });
    return users;
}