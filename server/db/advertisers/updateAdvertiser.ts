import { db } from '../connection';
import { Advertiser } from '../../../models';

/**
 * Updates advertiser data to database
 */
export async function updateAdvertiser(advertiser: Advertiser) {
    const update = await new Promise<boolean>((resolve, reject) => {
        db.collection("advertisers").doc(advertiser.docId).update(advertiser).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    return update;
}