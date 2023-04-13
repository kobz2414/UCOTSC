<script>
  import firebase from "firebase/compat/app";
  import "firebase/compat/auth";
  import { firebaseConfig } from "../auth/config.js";

  firebase.initializeApp(firebaseConfig);
  onMount(() => {
    document.title = "United Calinan Operators Transport Service Cooperative";
  });
</script>

<main>
  <p>index</p>
</main>
