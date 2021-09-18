import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLmlMYdVPRZjw5Bmw2t5-5NcvFbbQi6rc",
  authDomain: "get-hired-24d88.firebaseapp.com",
  projectId: "get-hired-24d88",
  storageBucket: "get-hired-24d88.appspot.com",
  messagingSenderId: "965481452732",
  appId: "1:965481452732:web:91863216c518ab7dcf6cb9",
  measurementId: "G-4CSRQ72VYH",
};

// //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,
// measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export const db = app.firestore();
