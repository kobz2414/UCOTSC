import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../auth/firestore"
import { writable } from "svelte/store";

export let units = writable([])

async function getTotalNumberOfUnits() {
    let unitsArray = []
    const querySnapshot = await getDocs(collection(db, "Queue"));
    if(querySnapshot){
        querySnapshot.forEach((doc) => {
            unitsArray.push(JSON.parse(JSON.stringify(doc.data())))
        })
    }

    return unitsArray
}

function setUnits() {
    getTotalNumberOfUnits().then((out) => {
        if(out){
            units.set(out)
        }
    })
}

// Set up a realtime listener to update the reactive store whenever there is new data
onSnapshot(collection(db, "Queue"), (snapshot) => {
    if(snapshot){
        setUnits()
    }
});

setUnits()

export default units
