import { db } from '../connection';
import { UserModel } from '../../../models';

/**
 * Gets user data from "users" -collection by UID
 */
export async function getUserByUID(uid: string) {
    const userData: UserModel = (await db.collection("users").doc(uid).get()).data() as UserModel;
    if (userData) {
        return userData;
    } else {
        return null;
    }
}