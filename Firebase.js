import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // TODO: Konfiguration des Firebase-Projekts eintragen
  apiKey: 'APIKEY',
  authDomain: 'AUTHDOMAIN',
  projectId: 'PROJECTID',
  storageBucket: 'STORAGEBUCKET',
  messagingSenderId: 'MESSAGINGSENDERID',
  appId: 'APPID'
};

export default class Firebase {
  static db;

  static init() {
    const app = initializeApp(firebaseConfig);
    Firebase.db = getFirestore(app);
  }
}
