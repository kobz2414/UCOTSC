import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../auth/firestore"
import { writable } from "svelte/store";



export let people = writable(0);

async function getTotalNumberOfPeople() {
    let totalCount = []
    const querySnapshot = await getDocs(collection(db, "Total"));
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

 //Set up a realtime listener to update the reactive store whenever there is new data
//onSnapshot(collection(db, "Total"), (snapshot) => {
//    if(snapshot){
//        snapshot.docChanges().forEach((change) => {
//           if (change.type === "modified" || change.type === "added" || change.type === "removed") setPeople()
//       }
//   )}
//});

// Listen to real-time updates on the specific 'current' document in the 'Detections' collection
onSnapshot(doc(db, "Detections", "current"), (documentSnapshot) => {
    if (documentSnapshot.exists()) {
        const data = documentSnapshot.data();
        people.set(data.Count); // Update the Svelte store with the new count
    } else {
        // Handle the case where the document does not exist or the count is reset
        people.set(0);
    }
});

//setPeople()

export default people
