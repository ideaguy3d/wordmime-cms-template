import { Reaction } from '../../../models';
import { db } from '../connection';

/**
 * Adds new reaction to database
 */
export async function addReaction(reactionData: Reaction) {
    reactionData.created = new Date();
    const add = await new Promise<boolean>((resolve, reject) => {
        db.collection("reactions").add(reactionData).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    return add;
}