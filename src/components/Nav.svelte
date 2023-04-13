<script>
    import { url } from '@roxi/routify';
    import { Button, Menu, EmailLogin } from '../components';
    import {user, loginHandler, logout} from './Auth.svelte';
    import { userlog } from './../auth/index.js';

    let _user;

    console.log((v) => (_user = v))
</script>



<main 
    class="fixed w-full flex justify-between items-center bg-black p-4 text-white"
>
    <div class = "p-1">
        <a href={$url('../')}>
            <img alt="skeme" class="w-12 h-12"  src="assets/images/logo.png" />
        </a>
    </div>
 
    <div class = "p-1">
        <p class="text-3xl subpixel-antialiased font-sans font-bold">
            UCOTSC
        </p>
    </div>


    {#if $userlog} 
       <Menu on:confirmLogout={logout}/>
    {:else}
       <EmailLogin on:confirmLogin={loginHandler}/>
    {/if}
</main>
<style>
    main{
        z-index: 1;
    }
</style>