 <script>
    export let title;
    export let black = false;
    export let white = false;
    export let disabled = false;
 </script>


 <button 
   on:click
   class="btn"
   class:btn-white={white}
   class:btn-black={black}
   class:disabled
   >
    {title}
 </button>


 <style lang="postcss">
   .btn {
      font-weight: 700 !important;
      padding-top: .5rem !important;
      padding-bottom: .5rem !important;
      padding-right: 1rem !important;
      padding-left: 1rem !important;
      border-radius: .25rem !important;
   }
   .btn-white{
      @apply text-white border-white;
   }

   .btn-black{
      @apply text-white bg-black border-black;
   }

   .disabled {
      @apply opacity-50 pointer-events-none;
   }
 </style>