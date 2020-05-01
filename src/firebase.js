import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDO0hKEXaVzH4i_CTVZ-PZn1_ypRUD7agI',
  authDomain: 'app-chat-dda74.firebaseapp.com',
  databaseURL: 'https://app-chat-dda74.firebaseio.com',
  projectId: 'app-chat-dda74',
  storageBucket: 'app-chat-dda74.appspot.com',
  messagingSenderId: '636607630786',
  appId: '1:636607630786:web:72b47f094774a7042ada5b',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize cloud firestore through firebase
const db = firebase.firestore();

window.db = db;

db.settings({
  timestampsInSnapshots: true,
});

export default db;
