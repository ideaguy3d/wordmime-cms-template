import { db } from '../connection';

/**
 * Checks if the users collection in Firestore is empty
 */
export async function deleteUserByUid(uid: string) {
    const deleteOperation: Boolean = await new Promise((resolve, reject) => {
        db.collection("users").doc(uid).delete().then(snapshot => {
            resolve(true);
        }).catch(error => {
            reject(error);
        })
    });
    return deleteOperation;
}