<script lang="ts">
  import Lang from './Lang.svelte';

  export let page: string = 'Default';
  export let word: string = 'Button';
  export let onClick: () => void;
</script>

<button
  on:click={onClick}
  class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-emerald-900 bg-emerald-600 focus:outline-none"
>
  <Lang {page} {word} />
</button>
