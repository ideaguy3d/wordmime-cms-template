import { db } from '../connection';
import { Media } from '../../../models';

/**
 * Saves media data to database
 */
export async function saveMediaData(media: Media) {
    const save = await new Promise<boolean>((resolve, reject) => {
        db.collection("media").doc(media.ref).create(media).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    return save;
}