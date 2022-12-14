import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

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

  // getQuotes --> Firebase.db....

  static async saveQuote(text, author) {
    const docRef = await addDoc(collection(Firebase.db, 'quotes'), {
      text,
      author,
    });
    return docRef.id;
  }
}
