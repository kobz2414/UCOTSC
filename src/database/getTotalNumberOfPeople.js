import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../auth/firestore"
import { writable } from "svelte/store";

export let people = writable(0)

async function getTotalNumberOfPeople() {
    let totalCount = ""
    const querySnapshot = await getDocs(collection(db, "Total"));
    querySnapshot.forEach((doc) => {
        totalCount = JSON.parse(JSON.stringify(doc.data()))?.Total
    })

    return totalCount
}

// Set up a realtime listener to update the reactive store whenever there is new data
onSnapshot(collection(db, "Total"), (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "modified") {
            getTotalNumberOfPeople().then((out) => {
                people.set(out);
            });
        }
    });
});

getTotalNumberOfPeople().then((out) => {
    people.set(out)
});

export default people