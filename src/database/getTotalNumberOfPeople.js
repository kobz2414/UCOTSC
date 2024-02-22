import { collection, getDocs, onSnapshot } from "firebase/firestore";
import db from "../auth/firestore";
import { writable } from "svelte/store";

// Initialize the people store to hold a numeric value (count of detections)
export let people = writable(0);

// Function to get the total number of people (detections)
async function getTotalNumberOfPeople() {
  const querySnapshot = await getDocs(collection(db, "Detections"));
  // Return the count of documents in the collection
  return querySnapshot.size;
}

// Real-time subscription to updates in the "Detections" collection
onSnapshot(collection(db, "Detections"), (snapshot) => {
  // Set the people store to the updated count
  people.set(snapshot.size);
}, error => {
  console.error(error);
});

// Call the function to get the initial count of people (detections)
getTotalNumberOfPeople().then((totalCount) => {
  // Update the people store with the initial count
  people.set(totalCount);
});

export default people;
