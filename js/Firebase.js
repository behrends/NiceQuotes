import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  // TODO: passende Werte für Firebase-config hier eintragen
  apiKey: 'APIKEY',
  authDomain: 'AUTHDOMAIN',
  databaseURL: 'DATABASEBURL',
  projectId: 'PROJECTID',
  storageBucket: 'STORAGEBUCKET',
  messagingSenderId: 'MESSAGINGSENDERID',
  appId: 'APPID'
};

export default class Firebase {
  static db;

  static init() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
    }
    Firebase.db = firebase.firestore();
  }
}
