import { doc, onSnapshot } from "firebase/firestore";
import db from "../auth/firestore";
import { writable } from "svelte/store";

export let people = writable(0);

onSnapshot(doc(db, "Total", "current"), (documentSnapshot) => {
    if (documentSnapshot.exists()) {
        const data = documentSnapshot.data();
        people.set(data.Count);
    } else {
        people.set(0);
    }
});

export default people;
