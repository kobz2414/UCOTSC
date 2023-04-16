<script>
    import { createEventDispatcher } from "svelte"
    import { navigate } from "svelte-routing";
    import { userlog } from "./../auth/index.js";

    const dispatch = createEventDispatcher();

    function handleLogout() {
        // dispatch the logout action
        dispatch("confirmLogout");

        // redirect to home page
        navigate("/Home");
    }

</script>


<main class="z-50">
<div class = "relative cursor-pointer">
    <div class = "mr-3 box-border w-20 h-10 flex items-center justify-center bg-black rounded hover:bg-gray-700 text-white" on:click={handleLogout}>
        <p class = "font-bold">Log Out</p>
    </div>
</div> 
</main>