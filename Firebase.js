import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from 'firebase/firestore';

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

  static async getQuotes() {
    let quotes = [];
    const querySnapshot = await getDocs(
      collection(Firebase.db, 'quotes')
    );
    querySnapshot.forEach((quote) => {
      quotes.push({
        id: quote.id,
        text: quote.data().text,
        author: quote.data().author,
      });
    });
    return quotes;
  }

  static async saveQuote(text, author) {
    const docRef = await addDoc(collection(Firebase.db, 'quotes'), {
      text,
      author,
    });
    return docRef.id;
  }

  static removeQuote(id) {
    deleteDoc(doc(Firebase.db, 'quotes', id));
  }
}
