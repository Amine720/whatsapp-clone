import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDbWXmqm_RJIJOeTI6-H8d-UEISBjJB3xk",
  authDomain: "whatsapp-clone-a295c.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-a295c.firebaseio.com",
  projectId: "whatsapp-clone-a295c",
  storageBucket: "whatsapp-clone-a295c.appspot.com",
  messagingSenderId: "902394952695",
  appId: "1:902394952695:web:4cdf80ec6bbfa2b325ccf2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
