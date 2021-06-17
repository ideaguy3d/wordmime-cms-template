import { db } from '../connection';

/**
 * Adds new subscriber to database
 */
export async function addSubscriber(email: string) {
    const add = await new Promise<boolean>((resolve, reject) => {
        db.collection("subscribers").add({ email: email }).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    return add;
}