<script>
  import Icons from '../lib/Icons.svelte';

  export let placeholder = '';
  export let icon;
  export let dimensions;
</script>

<div class="flex relative container m-2">
  <span
    class="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm"
  >
    <Icons iconName={icon} />
  </span>
  <input
    type="text"
    class="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
    {placeholder}
    bind:value={dimensions}
  />
  <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
    <span class="text-gray-500 sm:text-sm"> px </span>
  </div>
</div>
