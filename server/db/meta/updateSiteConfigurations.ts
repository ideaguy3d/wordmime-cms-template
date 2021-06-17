import { db } from '../connection';
import { SiteConfiguration } from '../../../models';

/**
 * Updates siteConfigurations
 */
export async function updateSiteConfigurations(settings: SiteConfiguration) {
    const update = await new Promise<boolean>((resolve, reject) => {
        db.collection("meta").doc("siteConfigurations").set(settings, { merge: true }).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    return update;
}