import { db } from '../connection';
import { UserModel } from '../../../models';

/**
 * Checks if the users collection in Firestore is empty
 */

export async function isEmpty() {
    const users: UserModel[] = await new Promise((resolve, reject) => {
        db.collection("users").limit(1).get().then(snapshot => {
            let docs = []
            snapshot.docs.forEach(doc => {
                docs.push(doc.data());
            });
            resolve(docs);
        });
    });
    if (!users.length) {
        return true;
    } else {
        return false;
    }
}