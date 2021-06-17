import { db } from '../connection';
import { Subscriber } from '../../../models';

/**
 * Gets all subscribers from "subscribers" -collection
 */
export async function getSubscribers() {
    const subscribers: Subscriber[] = await new Promise((resolve, reject) => {
        db.collection("subscribers").get().then(snapshot => {
            let docs = []
            snapshot.docs.forEach(doc => {
                let docData: Subscriber = doc.data() as Subscriber;
                docs.push(docData);
            });
            resolve(docs);
        });
    });
    return subscribers;
}