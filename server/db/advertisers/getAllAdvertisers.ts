import { db } from '../connection';
import { Advertiser } from '../../../models';

/**
 * Gets all advertisers data from "advertisers" -collection
 */
export async function getAllAdvertisers() {
    const advertisers: Advertiser[] = await new Promise((resolve, reject) => {
        db.collection("advertisers").get().then(snapshot => {
            let docs = []
            snapshot.docs.forEach(doc => {
                let docData: Advertiser = doc.data() as Advertiser;
                docs.push(docData);
            });
            resolve(docs);
        });
    });
    return advertisers;
}