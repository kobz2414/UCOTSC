import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDZKN4wBLlmynAM20uS_Dk9jr64QQNKlKo",
  authDomain: "ucotsc-new.firebaseapp.com",
  projectId: "ucotsc-new",
  storageBucket: "ucotsc-new.appspot.com",
  messagingSenderId: "460072388182",
  appId: "1:460072388182:web:bb1940dc98696e405c9df7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
