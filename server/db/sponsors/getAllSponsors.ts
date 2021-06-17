import { db } from '../connection';
import { Sponsor } from '../../../models';

/**
 * Gets all sponsors data from "sponsors" -collection
 */
export async function getAllSponsors() {
    const sponsors: Sponsor[] = await new Promise((resolve, reject) => {
        db.collection("sponsors").get().then(snapshot => {
            let docs = []
            snapshot.docs.forEach(doc => {
                let docData: Sponsor = doc.data() as Sponsor;
                docs.push(docData);
            });
            resolve(docs);
        });
    });
    return sponsors;
}