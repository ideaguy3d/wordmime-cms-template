import { db } from '../connection';
import { Advertiser } from '../../../models';

/**
 * Gets advertiser data from "advertisers" -collection by docId
 */
export async function getAdvertiser(docid: string) {
    const advertiserData: Advertiser = (await db.collection("advertisers").doc(docid).get()).data() as Advertiser;
    if (advertiserData) {
        return advertiserData;
    } else {
        return null;
    }
}