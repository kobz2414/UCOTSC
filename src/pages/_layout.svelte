<script>
    import { Router, Route, navigate } from 'svelte-routing';
    import { Nav } from '../components'
    import { Footer } from '../components'
    import { FooterLogin } from '../components'
    import { userlog } from './../auth/index.js';
    import { Home, Alert, About, Units, UnitsLogin, AlertLogin, Button, Menu, EmailLogin } from '../components';
    import { onMount } from 'svelte';

    onMount(() => {
        document.title = 'United Calinan Operators Transport Service Cooperative';

        setTimeout(() => {
      navigate("/");
    }, 100);
    });

</script> 

<Nav />

<Router>
    <Route path="/Home"><Home /></Route>
    <Route path="/Units"><Units/></Route>
    <Route path="/Alert"><Alert/></Route>
    <Route path="/About"><About/></Route>
    <Route path="/UnitsLogin"><UnitsLogin/></Route>
    <Route path="/AlertLogin"><AlertLogin/></Route>
    <div>
        {#if $userlog} 
        <FooterLogin/>
        {:else}
        <Footer/>
        {/if}
    </div>
</Router>




