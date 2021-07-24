import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDVX6HUc_PgAF-MHp8NHFXmVv5HkCoOm3A",
  authDomain: "whatsapp-clone-666-56499.firebaseapp.com",
  projectId: "whatsapp-clone-666-56499",
  storageBucket: "whatsapp-clone-666-56499.appspot.com",
  messagingSenderId: "801025642849",
  appId: "1:801025642849:web:5db6dac5a5fb8868013520",
  measurementId: "G-GQP60QEB89",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export default db;
export { auth, provider };
