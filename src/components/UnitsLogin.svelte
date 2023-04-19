<script>
  import { onDestroy } from "svelte";
  import db from "../auth/firestore";
  import {
    collection,
    addDoc,
    getDoc,
    getDocs,
    query,
    where,
    updateDoc,
    doc,
  } from "firebase/firestore";
  import units from "../database/getTotalNumberOfUnits";
  import { user } from "./Auth.svelte";
  import firebase from "firebase/compat/app";
  import "firebase/firestore";

  let totalNumberOfUnitsArray = $units;
  let userStatus;
  let userData;

  user.subscribe((v) => (userData = v));

  async function getCurrentUserStatus() {
    try {
      const queueRef = collection(db, "Queue");
      const querySnapshot = await getDocs(queueRef);
      const docId = querySnapshot.docs.find(
        (doc) => doc.data().email === userData.email
      )?.id;

      if (docId) {
        const docRef = doc(queueRef, docId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          const status = docSnapshot.data().status;
          return status;
        } else {
          console.log("No queue entry found for user.");
          return null;
        }
      } else {
        console.log("No queue entry found for user.");
        return null;
      }
    } catch (e) {
      console.error("Error getting current status: ", e);
      return null;
    }
  }

  async function getUserStatus() {
    userStatus = await getCurrentUserStatus();
    return userStatus;
  }

  getUserStatus();

  async function getTotalNumberOfUnits() {
    let unitsArray = [];
    const querySnapshot = await getDocs(collection(db, "Queue"));
    querySnapshot.forEach((doc) => {
      unitsArray.push(JSON.parse(JSON.stringify(doc.data())));
    });

    return unitsArray;
  }

  async function handleAddQueue() {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "Queue"), where("email", "==", userData.email))
      );
      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, {
          status: "In Queue",
          date: firebase.firestore.FieldValue.serverTimestamp(),
        });
        getUserStatus()
      } else {
        const docRef = await addDoc(collection(db, "Queue"), {
          email: userData.email,
          status: "In Queue",
          date: firebase.firestore.FieldValue.serverTimestamp(),
        });
        getUserStatus();
      }
      units.set(await getTotalNumberOfUnits());
    } catch (e) {
      console.error("Error adding/updating document: ", e);
    }
  }

  async function removeUserFromQueue() {
  try {
    const queueRef = collection(db, "Queue");
    const querySnapshot = await getDocs(queueRef);
    const document = querySnapshot.docs.find(
      (doc) => doc.data().email === userData.email && doc.data().status === "In Queue"
    );
    if (document) {
      const docId = document.id;
      await updateDoc(doc(queueRef, docId), { status: "Dispatched" });
      getUserStatus();
      units.set(await getTotalNumberOfUnits());
    } else {
      console.log("User not found in queue or is not in queue.");
    }
  } catch (e) {
    console.error("Error removing user from queue: ", e);
  }
}


  async function setUserAsOffline() {
    try {
      const queueRef = collection(db, "Queue");
      const querySnapshot = await getDocs(queueRef);
      const docId = querySnapshot.docs.find(
        (doc) => doc.data().email === userData.email
      )?.id;
      if (docId) {
        await updateDoc(doc(queueRef, docId), { status: "Offline" });
        getUserStatus();
        units.set(await getTotalNumberOfUnits());
      } else {
        console.log("User not found");
      }
    } catch (e) {
      console.error("Error removing user from queue: ", e);
    }
  }

  // Subscribe to the num store and update the component when the value changes
  const unsubscribe = units.subscribe((value) => {
    totalNumberOfUnitsArray = value;
  });

  // Don't forget to unsubscribe when the component is destroyed
  onDestroy(() => {
    unsubscribe();
  });

  // Define the three research proponents
  const researchers = [
    {
      id: 1,
      src: "assets/images/kim.png",
      name: "Jonathan Kim S. Sarong",
      bio: "Kim is a researcher with 10 years of experience in the field of transportation and logistics. He holds a PhD in Industrial Engineering from MIT and has published several papers in top-tier academic journals.",
    },
    {
      id: 2,
      src: "assets/images/franco.png",
      name: "Gianfranco M. Adana",
      bio: "Franco is a researcher with a background in urban planning and sustainable transportation. She is currently pursuing her PhD in Transportation Engineering at UC Berkeley and has presented her research at several international conferences.",
    },
    {
      id: 3,
      src: "assets/images/andre.png",
      name: "Andre Miguelle U. Lao",
      bio: "Andre is a data scientist with expertise in statistical modeling and machine learning. He has worked on a variety of transportation-related projects, including demand forecasting and route optimization.",
    },
  ];
</script>

<br />
<br />
<br />
<div />
<main class="w- full mx-auto py-6 sm:px-6 lg:px-8">
  <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
    <!-- Alerts section -->
    <div class="heading">
      <h2 class="text-2xl font-bold mb-4">Van Units</h2>
    </div>

    <div class="margin-info">
      <div class="con-info">
        <div class="con-in">
          <div class="con-peak">
            <img
              class="vanimg"
              src="assets/images/vanunit.png"
              alt="Van L340"
            />
          </div>
        </div>

        <div class="con-in">
          <div class="main-title">
            UNITS | Available L340 Van Units in Terminal
          </div>
          <div class="van-stat">
            <div class="stat">
              <br />
              <div class="stat-heada">Total Stationed</div>
              <div class="stat-desca">
                {totalNumberOfUnitsArray.filter(
                  (unit) => unit.status === "In Queue"
                ).length}
              </div>
            </div>

            <div class="stat">
              <div class="stat-headb">Total Dispatched</div>
              <div class="stat-descb">
                {totalNumberOfUnitsArray.filter(
                  (unit) => unit.status === "Dispatched"
                ).length}
              </div>
            </div>
          </div>
          <div class="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="flex justify-center">
        Current Status: {userStatus}
      </div>
      <br />
      <div class="flex justify-center">
        <div class="mx-3">
          <button
            class="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
            on:click={handleAddQueue}
          >
            Add to Queue
          </button>
        </div>
        <div class="mx-3">
          <button
            class="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
            on:click={removeUserFromQueue}
          >
            Mark as Dispatched
          </button>
        </div>
        <div class="mx-3">
          <button
            class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            on:click={setUserAsOffline}
          >
            Go Offline
          </button>
        </div>
      </div>
      <br />
      <br />
      <h2 class="text-center"><b>Drivers In Queue</b></h2>
      <br />
      <div class="max-w-md mx-auto">
        <ul
          class="bg-white border rounded shadow divide-y divide-gray-200 flex flex-col"
        >
          {#each totalNumberOfUnitsArray
            .filter((unit) => unit.status === "In Queue")
            .sort((a, b) => a.date - b.date) as unit}
            {#if userData.email === unit.email}
              <li class="px-4 py-1 bg-amber-600 hover:bg-amber-700">
                <p>Name: <b>{unit.email}</b></p>
                <p>
                  Time: {unit.date
                    ? new Date(unit.date.seconds * 1000).toLocaleString()
                    : ""}
                </p>
              </li>
            {:else}
              <li class="px-4 py-1 hover:bg-gray-100">
                <p>Name: <b>{unit.email}</b></p>
                <p>
                  Time: {unit.date
                    ? new Date(unit.date.seconds * 1000).toLocaleString()
                    : ""}
                </p>
              </li>
            {/if}
          {/each}
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</main>

<style>
  main {
    background: white;
  }
  .heading {
    margin: 30px 20px;
  }
  .margin-info {
    margin: 10px 20px;
  }
  .con-info {
    text-align: center;
    display: block;
    width: auto;
    height: auto;
    top: 170px;
    margin-left: auto;
    margin-right: auto;
    background: #f3f4f6;
    padding: 20px 20px;
  }
  .con-peak {
    border-radius: 20px;
    border: none;
    height: 170px;
    width: 300px;
    top: 200px;
    background: url(assets/images//road.jpg);
    background-size: 100%;
    color: white;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    text-shadow: 2px 2px 12px #000;
  }

  .con-info {
    display: block;
    width: auto;
    height: auto;
    top: 170px;
  }
  .vanimg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 125px;
    position: absolute;
    top: 50px;
    right: 0;
    left: 0;
  }
  .con-in {
    display: block;
    position: relative;
    height: auto;
    width: auto;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .main-title {
    color: black;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
    padding: 10px 0px;
    font-size: 20px;
    border-bottom: 1px solid rgb(197, 197, 197);
    margin-bottom: 5px;
  }
  .desc {
    color: black;
    top: 25px;
    font-size: 12px;
    text-align: justify;
    font-size: 15px;
    padding: 0px 50px;
  }
  .van-stat {
    margin-bottom: 20px;
  }
  .stat {
    display: inline-block;
    margin: 0px 10px;
    line-height: 1;
    border-bottom: 2px solid;
    border-bottom-style: dashed;
    padding-bottom: 7px;
  }
  .stat-heada {
    font-size: 15px;
    font-weight: bold;
  }
  .stat-headb {
    font-size: 15px;
    font-weight: bold;
  }
  .stat-desca {
    font-size: 30px;
    font-weight: 600;
  }
  .stat-descb {
    font-size: 30px;
    font-weight: 600;
  }
</style>
