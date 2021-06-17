import { db } from '../connection';

/**
 * Delete reaction by docId
 */
export async function removeReaction(docId: string) {
    const deleteOperation: boolean = await new Promise((resolve, reject) => {
        db.collection("reactions").doc(docId).delete().then(snapshot => {
            resolve(true);
        }).catch(error => {
            reject(error);
        })
    });
    return deleteOperation;
}