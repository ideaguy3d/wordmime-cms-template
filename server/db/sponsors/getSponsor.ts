import { db } from '../connection';
import { Sponsor } from '../../../models';

/**
 * Gets sponsor data from "sponsors" -collection by docId
 */
export async function getSponsor(docid: string) {
    const sponsorData: Sponsor = (await db.collection("sponsors").doc(docid).get()).data() as Sponsor;
    if (sponsorData) {
        return sponsorData;
    } else {
        return null;
    }
}