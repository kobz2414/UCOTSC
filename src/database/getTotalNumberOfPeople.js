import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../auth/firestore"
import { writable } from "svelte/store";

export let people = writable([])

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

function setPeople() {
    getTotalNumberOfPeople().then((out) => {
        if(out){
            people.set(out)
        }
    })
}

// Set up a realtime listener to update the reactive store whenever there is new data
onSnapshot(collection(db, "Detections"), (snapshot) => {
    if(snapshot){
        setPeople()
    }
}, (error) => {
    console.error(error);
});

setPeople()

export default people
