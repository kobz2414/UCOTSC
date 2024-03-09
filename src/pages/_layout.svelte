<script>
    import { Router, Route, navigate, Link } from 'svelte-routing';
    import { Nav } from '../components'
    import { Footer } from '../components'
    import { FooterLogin } from '../components'
    import { HomeLogin } from '../components'
    import { userlog } from './../auth/index.js';
    import { Home, Alert, About, Units, UnitsLogin, AlertLogin, HomeWrapper } from '../components';
    import { onMount } from 'svelte';

    onMount(() => {
        document.title = 'United Calinan Operators Transport Service Cooperative';
        navigate("/Home");
        setTimeout(() => {
      navigate("/");
    }, 100);
    });

</script> 

<Nav />

<Router>
    <Route path="/Home" component={HomeWrapper} default/>
    <Route path="/Units" component={Units} />
    <Route path="/Alert" component={Alert} />
    <Route path="/About" component={About} />
    <Route path="/HomeLogin" component={HomeLogin} />
    <Route path="/UnitsLogin" component={UnitsLogin} />
    <Route path="/AlertLogin" component={AlertLogin} />
    <div>
        {#if $userlog} 
        <FooterLogin/>
        {:else}
        <Footer/>
        {/if}
    </div>
</Router>
