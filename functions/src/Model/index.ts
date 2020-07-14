import admin from 'firebase-admin';

admin.initializeApp();

const db:admin.firestore.CollectionReference = admin.firestore().collection('beaches');

export interface IBeach {
    description: string;
    location: string;
    name: string;
    picture: string;
    state: string;
}

export default db;