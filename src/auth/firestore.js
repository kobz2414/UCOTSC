import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app"
import { firebaseConfig } from './config.js'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db;
