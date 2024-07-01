import { readable, writable } from 'svelte/store';
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const userlog = writable(null);

let error = null;

const userMapper = claims => ({
    id: claims.user_id,
    name: claims.name,
    email: claims.email,
    picture: claims.picture
});

export const initAuth = (useRedirect = false) => {
    const logout = () => signOut(auth);

    const loginWithEmailPassword = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const loginHandler = async event => {
        const { email, password } = event.target.elements;
        try {
            error = null;
            await loginWithEmailPassword(email.value, password.value);
            userlog.set(auth.currentUser);
        } catch (err) {
            error = err;
        }
    };
    
    onAuthStateChanged(auth, (firebaseUser) => {
        userlog.set(firebaseUser);
    });

    const user = readable(null, set => {
        const unsub = onAuthStateChanged(auth, async fireUser => {
            if (fireUser) {
                const token = await fireUser.getIdTokenResult();
                const user = userMapper(token.claims);
                set(user);
            } else {
                set(null);
            }
        });
        return unsub;
    });

    return {
        user,
        loginWithEmailPassword,
        loginHandler,
        logout
    };
};
