import { db } from '../connection';
import { Media } from '../../../models';

/**
 * Updates media data to database
 */
export async function updateMediaData(media: Media) {
    const save = await new Promise<boolean>((resolve, reject) => {
        db.collection("media").doc(media.ref).update(media).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    return save;
}