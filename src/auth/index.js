import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { firebaseConfig } from './config.js'
import { readable } from 'svelte/store'
import { writable } from 'svelte/store';

export const userlog = writable(null);

firebase.initializeApp(firebaseConfig)

let error=null;

const userMapper = claims => ({
    id: claims.user_id,
    name: claims.name,
    email: claims.email,
    picture: claims.picture
})

export const initAuth = (useRedirect = false) => {
    const auth = firebase.auth()
    
    const logout = () => auth.signOut()

    const loginWithEmailPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

    const loginHandler = async event => {
        const { email, password } = event.target.elements;
        try {
            error = null;
            await loginWithEmailPassword(email.value, password.value);
            userlog.set(auth.currentUser);
            alert('Login successful!');
        } catch (err) {
            error = err;
            alert('Login failed!');
        }
    };
    
    auth.onAuthStateChanged((firebaseUser) => {
        userlog.set(firebaseUser); // update user store on auth state change
      });

    const user = readable(null, set => {
        const unsub = auth.onAuthStateChanged(async fireUser => {
            if (fireUser){
                const token = await fireUser.getIdTokenResult()
                const user = userMapper(token.claims)
                
                set(user)
            } else {
                set (null)
            }
        })
        return unsub
    })

    return {
        user,
        loginWithEmailPassword,
        loginHandler,
        logout
    }
}