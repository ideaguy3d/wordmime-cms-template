import { db } from '../connection';
import { UserModel } from '../../../models';

/**
 * Gets user data from "users" -collection by email
 */
export async function getUserByEmail(email: string) {
    const userData: UserModel = await new Promise((resolve, reject) => {
        db.collection("users").where("email", "==", email).limit(1).get().then(snapshot => {
            let docs = []
            snapshot.docs.forEach(doc => {
                let docData: UserModel = doc.data() as UserModel;
                // temp admin users dont have uid in their data, so we attach it from the docId
                if(!docData.uid) docData.uid = doc.id;
                docs.push(docData);
            });
            resolve(docs[0]);
        });
    });
    if (userData) {
        return userData;
    } else {
        return null;
    }
}