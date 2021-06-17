import { db } from '../connection';
import { getUserByEmail } from './getUserByEmail';

/**
 * Creates a new temp admin user
 */
export async function userTempCreate(email: string, role: number) {
    const tempUserData = {
        email: email,
        role: role,
        firstLogin: false
    }

    /**
     * If a user with this email is already found, we return
     */
    const userExists = await getUserByEmail(email);
    if(userExists) return false;

    const createTempAdmin = await new Promise<boolean>((resolve, reject) => {
        db.collection("users").doc().create(tempUserData).then(response => {
            resolve(true);
        }).catch(error => {
            return reject(false);
        })
    });
    return createTempAdmin;
}