import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../auth/firestore"
import { writable } from "svelte/store";

export let terminalCapacity = writable(0)

async function getTotalNumberOfPeople() {
    let totalCount = 0
    const querySnapshot = await getDocs(collection(db, "Terminal"));
    if(querySnapshot){
        querySnapshot.forEach((doc) => {
            totalCount = JSON.parse(JSON.stringify(doc.data()))
        })
    }

    return totalCount
}

function setTerminalCapacity(){
    getTotalNumberOfPeople().then((out) => {
        if (out) terminalCapacity.set(out.MaxNumberOfPeople);
    });
}

// Set up a realtime listener to update the reactive store whenever there is new data
onSnapshot(collection(db, "Terminal"), (snapshot) => {
    if(snapshot){
        snapshot.docChanges().forEach((change) => {
            if (change.type === "modified") setTerminalCapacity()
        });
    }
}, (error) => {
    console.error(error);
});

setTerminalCapacity()

export default terminalCapacity