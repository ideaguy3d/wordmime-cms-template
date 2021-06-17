import { db } from '../connection';
import { UserModel } from '../../../models';

/**
 * Updates user data
 */
export async function updateUser(user: UserModel) {
    const update = await new Promise<boolean>((resolve, reject) => {
        db.collection("users").doc(user.uid).update(user).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    return update;
}