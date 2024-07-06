import { getFirestore } from "firebase/firestore";
import firebase from './firebase'; // Use the already initialized firebase instance

const db = getFirestore(firebase);

export default db;