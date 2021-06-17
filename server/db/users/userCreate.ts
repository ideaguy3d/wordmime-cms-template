import { db } from '../connection';
import { UserModel } from '../../../models';
import { User } from 'firebase';

/**
 * Creates a new user
 */
export async function userCreate(user: User, userData: UserModel) {
    const newAdminUserData: UserModel = {
        role: userData.role,
        displayName: user.displayName,
        email: user.email,
        marketing: false,
        photoURL: user.photoURL,
        uid: user.uid,
        firstLogin: true
    }
    const createAdmin = await new Promise<UserModel>((resolve, reject) => {
        db.collection("users").doc(user.uid).create(newAdminUserData).then(response => {
            resolve(newAdminUserData);
        }).catch(error => {
            return reject(error);
        })
    });
    return createAdmin;
}