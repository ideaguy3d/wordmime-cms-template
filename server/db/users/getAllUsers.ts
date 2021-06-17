import { db } from '../connection';
import { UserModel } from '../../../models';

/**
 * Gets all users from "users" -collection
 */
export async function getAllUsers() {
    const users: UserModel[] = await new Promise((resolve, reject) => {
        db.collection("users").get().then(snapshot => {
            let docs = []
            snapshot.docs.forEach(doc => {
                let docData: UserModel = doc.data() as UserModel;
                // temp admin users dont have uid in their data, so we attach it from the docId
                if(!docData.uid) docData.uid = doc.id;
                docs.push(docData);
            });
            resolve(docs);
        });
    });
    return users;
}