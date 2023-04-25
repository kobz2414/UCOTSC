<script>
  import { url } from "@roxi/routify";
  import { Button, Menu, EmailLogin } from "../components";
  import { user, loginHandler, logout } from "./Auth.svelte";
  import { userlog } from "./../auth/index.js";
  import { navigate } from "svelte-routing";

</script>

{#if $userlog}
  <main
    class="fixed w-full flex justify-between items-center bg-amber-600 p-4 text-black"
  >
    <div class="p-1">
      <button
        type="button"
        class="icon-button"
        on:click={() => navigate("/Home")}
      >
        <img alt="skeme" class="w-12 h-12" src="images/logo.png" />
      </button>
    </div>
    <div class="p-1">
      <p class="text-3xl subpixel-antialiased font-sans font-bold">UCOTSC</p>
    </div>
    <Menu on:confirmLogout={logout} />
  </main>
{:else}
  <main
    class="fixed w-full flex justify-between items-center bg-black p-4 text-white"
  >
    <div class="p-1">
      <button
        type="button"
        class="icon-button"
        on:click={() => navigate("/Home")}
      >
        <img alt="skeme" class="w-12 h-12" src="images/logo.png" />
      </button>
    </div>
    <div class="p-1">
      <p class="text-3xl subpixel-antialiased font-sans font-bold">UCOTSC</p>
    </div>
    <EmailLogin on:confirmLogin={loginHandler} />
  </main>
{/if}

<style>
  main {
    z-index: 1;
  }
</style>
