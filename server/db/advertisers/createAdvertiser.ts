import { db } from '../connection';
import { Advertiser } from '../../../models';

/**
 * Creates advertiser to database
 */
export async function createAdvertiser(advertiser: Advertiser) {
    const create = await new Promise<boolean>((resolve, reject) => {
        db.collection("advertisers").doc(advertiser.docId).create(advertiser).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    return create;
}