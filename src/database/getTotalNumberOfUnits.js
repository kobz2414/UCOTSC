import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../auth/firestore"
import { writable } from "svelte/store";

export let units = writable([])

async function getTotalNumberOfUnits() {
    let unitsArray = []
    const querySnapshot = await getDocs(collection(db, "Queue"));
    querySnapshot.forEach((doc) => {
        unitsArray.push(JSON.parse(JSON.stringify(doc.data())))
    })

    return unitsArray
}

// Set up a realtime listener to update the reactive store whenever there is new data
onSnapshot(collection(db, "Queue"), (snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "modified") {
            getTotalNumberOfUnits().then((out) => {
                units.set(out);
            });
        }
    });
});

getTotalNumberOfUnits().then((out) => {
    units.set(out)
});

export default units
