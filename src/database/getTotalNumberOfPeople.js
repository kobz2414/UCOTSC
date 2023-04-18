import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../auth/firestore"
import { writable } from "svelte/store";

export let people = writable([])

async function getTotalNumberOfPeople() {
    let totalCount = []
    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
        totalCount.push(JSON.parse(JSON.stringify(doc.data())))
    })

    return totalCount
}

// Set up a realtime listener to update the reactive store whenever there is new data
onSnapshot(collection(db, "Users"), (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added" || change.type === "removed") {
            getTotalNumberOfPeople().then((out) => {
                people.set(out);
            });
        }
    });
}, (error) => {
    console.error(error);
});

getTotalNumberOfPeople().then((out) => {
    people.set(out)
});

export default people