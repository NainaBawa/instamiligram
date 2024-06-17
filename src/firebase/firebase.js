import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcyQHQ-Z_GZkYC2wRq0jNTY5urWN6a8aU",
  authDomain: "insta-clone-naina.firebaseapp.com",
  projectId: "insta-clone-naina",
  storageBucket: "insta-clone-naina.appspot.com",
  messagingSenderId: "319766192818",
  appId: "1:319766192818:web:349870a57230d39ed95fab",
  measurementId: "G-5THKENH0R3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth,firestore, storage }; 

