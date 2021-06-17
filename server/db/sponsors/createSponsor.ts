import { db } from '../connection';
import { Sponsor } from '../../../models';

/**
 * Creates sponsor to database
 */
export async function createSponsor(sponsor: Sponsor) {
    const create = await new Promise<boolean>((resolve, reject) => {
        db.collection("sponsors").doc(sponsor.docId).create(sponsor).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    return create;
}