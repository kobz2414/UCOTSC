<script context="module">
    import { initAuth } from './../auth/index.js';
    export const { user, loginHandler, loginWithEmailPassword, logout } = initAuth();

    user.subscribe((v) => console.log(v));
</script>
