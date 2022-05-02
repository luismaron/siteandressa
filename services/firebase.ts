import firebase from "firebase/compat/app";

import { getFirestore } from "firebase/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCHiwC4oG9RPAXnn_VKj1EUL8fO7DLdXo",
  authDomain: "site-andressa.firebaseapp.com",
  databaseURL: "https://site-andressa-default-rtdb.firebaseio.com",
  projectId: "site-andressa",
  storageBucket: "site-andressa.appspot.com",
  messagingSenderId: "627487969759",
  appId: "1:627487969759:web:2fde1c1a6c81d39845346a",
};

firebase.initializeApp(firebaseConfig);

const database = getFirestore();

export { database };
