import { db } from '../connection';
import { SiteConfiguration } from '../../../models';

/**
 * Updates sw
 */
export async function updateSw() {
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
    const settings = {
        sw: makeid(5)
    }
    const update = await new Promise<boolean>((resolve, reject) => {
        db.collection("meta").doc("siteConfigurations").set(settings, { merge: true }).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    return update;
}