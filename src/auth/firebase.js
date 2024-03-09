import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { firebaseConfig } from './config.js'

firebase.initializeApp(firebaseConfig)

export default firebase;
