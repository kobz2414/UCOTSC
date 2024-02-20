import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../auth/firestore"
import { writable } from "svelte/store";

export let maxOccupants = writable(0)

async function getTotalNumberOfPeople() {
    let totalCount = 0
    const querySnapshot = await getDocs(collection(db, "Detections"));
    if(querySnapshot){
        querySnapshot.forEach((doc) => {
            totalCount = JSON.parse(JSON.stringify(doc.data()))
        })
    }

    return totalCount
}

function setMaxOccupants(){
    getTotalNumberOfPeople().then((out) => {
        if(out){
            maxOccupants.set(out.MaxOccupants)
        }
    });
}

// Set up a realtime listener to update the reactive store whenever there is new data
onSnapshot(collection(db, "Detections"), (snapshot) => {
    if(snapshot){
        snapshot.docChanges().forEach((change) => {
            if (change.type === "modified") setMaxOccupants()
        });
    }
}, (error) => {
    console.error(error);
});

setMaxOccupants()

export default maxOccupants
