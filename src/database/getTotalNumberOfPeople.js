import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../auth/firestore"
import { writable } from "svelte/store";

export let people = writable(0)

async function getTotalNumberOfPeople() {
    let totalCount = []
    const querySnapshot = await getDocs(collection(db, "Detections"));
    if(querySnapshot){
        querySnapshot.forEach((doc) => {
            totalCount.push(JSON.parse(JSON.stringify(doc.data())))
        })
    }

    return totalCount
}


// Set up a realtime listener to update the reactive store whenever there is new data
onSnapshot(collection(db, "Detections"), (snapshot) => {
    people.set(snapshot.size); // updates the people count, snapshot.size gives the current number of documents 
}, error => {
    console.error(error);
});

getTotalNumberOfPeople().then((out) => {
    if(out){
        people.set(out)
    }
});
setPeople()

export default people
