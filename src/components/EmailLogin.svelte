<script>
    import 'firebase/compat/auth'
    import { createEventDispatcher } from "svelte"
    import { clickOutside } from '../services/clickOutside';
    import { fade } from 'svelte/transition';
    import { initAuth } from './../auth/index.js';
  

    const dispatch = createEventDispatcher();

    const { loginWithEmailPassword, logout} = initAuth();

    let error = null;

    const loginHandler = async event => {
        const { email, password } = event.target.elements;
        try {
            await loginWithEmailPassword(email.value, password.value);
            location.reload()
        } catch (err) {
            error = err;
        }
    };

    export let isOpen = false;

    function handleClickOutside() {
        isOpen = false
    }

    function openMenu() {
        isOpen = !isOpen;
    }
</script>

<main class="z-50">
<div class = "relative cursor-pointer">
    <div class = "mr-3 box-border w-20 h-10 flex items-center justify-center bg-white text-black rounded hover:bg-gray-300 " on:click={openMenu}>
        <p class = "font-bold">Login</p>
    </div>
{#if isOpen}
    <div class = "flex shrink flex-col text-left absolute border top-16 right-0 z-50 bg-zinc-200
    rounded-lg text-black mt-3 min-h-min"
    use:clickOutside
    on:click_outside={handleClickOutside}
    >
    <form 
    on:submit|preventDefault={loginHandler}
    class="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 ">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Email
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter Email" />
        </div>
        <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3
                text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter Password" />
        </div>
        {#if error}
          <div transition:fade class="p-2 mb-6 bg-red-300">{error.message}</div>
        {/if}
        <div class="flex items-center justify-between">
            <button
            class="w-60 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
            rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign In
            </button>
        </div>
    </form>

    </div>
{/if}
</div> 
</main>