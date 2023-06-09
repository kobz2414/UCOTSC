<script>
  import { collection, onSnapshot, addDoc } from "firebase/firestore";
  import { onMount } from "svelte";
  import db from "../auth/firestore";
  import { user } from "./Auth.svelte";

  let newPost = "";
  let posts = [];
  let userData;

  user.subscribe((v) => (userData = v));

  const postsRef = collection(db, "Posts");

  onMount(() => {
    onSnapshot(postsRef, (snapshot) => {
      posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    });
  });

  async function createPost() {
    if (newPost.trim() === "") return;

    await addDoc(postsRef, {
      text: newPost,
      user: userData.email,
      createdAt: new Date().toISOString(),
    });

    newPost = "";
  }

  // Define the three research proponents
  const researchers = [
    {
      id: 1,
      src: "images/kim.png",
      name: "Jonathan Kim S. Sarong",
      bio: "Kim is a researcher with 10 years of experience in the field of transportation and logistics. He holds a PhD in Industrial Engineering from MIT and has published several papers in top-tier academic journals.",
    },
    {
      id: 2,
      src: "images/franco.png",
      name: "Gianfranco M. Adana",
      bio: "Franco is a researcher with a background in urban planning and sustainable transportation. She is currently pursuing her PhD in Transportation Engineering at UC Berkeley and has presented her research at several international conferences.",
    },
    {
      id: 3,
      src: "images/andre.png",
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
    <div class="heading flex flex-col items-center">
      <h2 class="text-2xl font-bold mb-2 text-center">Message Alerts</h2>
      <p class="text-center">Messages are capped to 30 at a time</p>
    </div>

    <div class="margin-info">
      <div class="con-info">
        <div class="flex flex-col gap-4">
          <div class="bg-white shadow-md rounded-md p-4">
            <textarea
              class="w-full h-24 resize-none border border-gray-200 rounded-md p-2"
              placeholder="What's on your mind?"
              bind:value={newPost}
            />
            <button
              class="mt-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors"
              on:click={createPost}
            >
              Post
            </button>
          </div>

          {#if posts.length > 0}
            {#each posts
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 30) as post}
              <div
                class="bg-white shadow-md rounded-md p-4 flex flex-col gap-2"
                key={post.id}
              >
                <p><b>{post.text}</b></p>
                <p class="text-gray-600 text-sm">
                  {post.user} - {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
            {/each}
          {:else}
            <p class="text-gray-500">No posts yet.</p>
          {/if}
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
  <br />
  <br />
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
    border-radius: 0.5rem;
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
  p {
    color: black;
    display: inline-block;
    width: auto;
    border: 1px solid white;
    font-size: 12px;
    text-align: justify;
  }
</style>
