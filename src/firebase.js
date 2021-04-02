import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAav4npVSk3qxRbpjB1kAbULxisBGKqN0c",
    authDomain: "whatsapp-clone-e3dce.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-e3dce.firebaseio.com",
    projectId: "whatsapp-clone-e3dce",
    storageBucket: "whatsapp-clone-e3dce.appspot.com",
    messagingSenderId: "828540858334",
    appId: "1:828540858334:web:79bab9caec63496200374f",
    measurementId: "G-CB83LZX7KG"
  };

  const firebaseApp= firebase.initializeApp (firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

    export { auth, provider };
    export default db;