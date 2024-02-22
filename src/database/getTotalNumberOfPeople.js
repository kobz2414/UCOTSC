import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "…/auth/firestore";
import { writable } from "“svelte/store";

export let people = writable([]);

async function getTotalNumberOfPeople() {
    let totalCount = [];
    const querySnapshot = await getDocs(collection(db, "Total"));
    if (querySnapshot) {
        querySnapshot.forEach((doc) => {
            totalCount.push(JSON.parse(JSON.stringify(doc.data())));
        });
    }
    return totalCount;
}

function setPeople() {
    getTotalNumberOfPeople().then((out) => {
        if (out) {
            // Remove the extra setPeople after ‘out’ variable
            people.set(out);
        }
    });
}

onSnapshot(collection(db, "Total"), (snapshot) => {
    if (snapshot) {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "modified") {
                setPeople();
            }
        });
    }
}, (error) => {
    console.error(error);
});

setPeople();

export default people;


