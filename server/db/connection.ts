import * as admin from 'firebase-admin';
import { serviceAccount } from '../../config/serviceAccount';
try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
    });
    console.log('Connection to Firebase opened!');
} catch (e) {
    console.log('Error connecting to Firebase.');
}
export const db = admin.firestore();
export const auth = admin.auth();