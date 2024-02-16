import { collection, onSnapshot } from "firebase/firestore";
import db from "../auth/firestore";
import { writable } from "svelte/store";

export let totalDetections = writable(0); // This store will hold the total count of detections

// Function to listen for real-time updates to the detection count
function listenForDetections() {
    // Assuming "Detections" is the name of your collection
    onSnapshot(collection(db, "Detections"), (snapshot) => {
        let totalCount = 0; // Start with a count of zero

        // Sum up the 'count' field from all documents
        snapshot.forEach((doc) => {
            const data = doc.data();
            totalCount += data.count; // Assuming each document has a 'count' field
        });

        // Set the total count to the Svelte store
        totalDetections.set(totalCount);
    }, (error) => {
        console.error("Error fetching detections:", error);
    });
}

// Call the function to start listening for changes
listenForDetections();

export default totalDetections;
