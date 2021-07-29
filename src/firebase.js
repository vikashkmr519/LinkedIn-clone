import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBsuZFIVN9GMKzB6j2HYa_ubUUtRvt9--o",
  authDomain: "linkedin-clone-69b71.firebaseapp.com",
  projectId: "linkedin-clone-69b71",
  storageBucket: "linkedin-clone-69b71.appspot.com",
  messagingSenderId: "548315135738",
  appId: "1:548315135738:web:b0c42ca4232b28a74b5343",
  measurementId: "G-43ZJ68DVWB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
