<script>
    import { Home, HomeLogin } from '../components';
    import { userlog } from './../auth/index.js';
  </script>
  
  {#if $userlog}
    <HomeLogin />
  {:else}
    <Home />
  {/if}