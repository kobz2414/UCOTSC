<script>
    import { createEventDispatcher } from "svelte"
    import { clickOutside } from '../services/clickOutside';

    export let isOpen = false;

    const dispatch = createEventDispatcher();

    function handleClickOutside() {
        isOpen = false
    }

    function openMenu() {
        isOpen = !isOpen;
    }
</script>


<main class="z-50">
<div class = "relative cursor-pointer">
    <div class = "mr-3 box-border w-20 h-10 flex items-center justify-center bg-black rounded hover:bg-gray-700 " on:click={openMenu}>
        <p class = "font-bold">Log Out</p>
    </div>
{#if isOpen}
    <div class = "flex flex-col text-left absolute border top-16 right-0 bg-white z-50 
    rounded-lg p-4 text-black pl-32 mt-3 hover:bg-gray-100"
    use:clickOutside
    on:click_outside={handleClickOutside}
    >
    <p class="text-red-500 font-bold" on:click={() => dispatch("confirmLogout")} >Logout</p>
    </div>
{/if}
</div> 
</main>