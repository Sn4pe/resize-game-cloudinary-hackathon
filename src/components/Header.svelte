<script>
  import Icons from '../lib/Icons.svelte';
  import Lang from './Lang.svelte';
  import LanguageButton from './LanguageButton.svelte';
</script>

<header class="w-full bg-gray-900 sm:px-6 xl:px-24">
  <div
    class="border-b border-gray-800 py-7 sm:flex sm:items-center sm:justify-between"
  >
    <div class="text-center sm:text-left mb-10 sm:mb-0">
      <div class="items-center relative flex justify-between">
        <img src="logo.svg" alt="" class="z-10 absolute left-0 transform translate-y-1">
        <h1 class="bg-gradient-to-r from-green-300 via-green-500 to-green-600 bg-clip-text text-5xl font-extrabold text-transparent relative z-0 transform translate-x-11 pl-8">
          esize Game
        </h1>
      </div>
      <p class="mt-1.5 text-sm text-gray-500 hidden sm:visible">textot! 🎉</p>
    </div>

    <div
      class="mt-4 flex justify-center gap-4 sm:mt-0 sm:flex-row sm:items-center "
    >
      <a
        href="https://github.com/Sn4pe/resize-game-cloudinary-hackathon"
        rel="noreferrer"
        target="_blank"
        class=" text-sm font-medium inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
      >
        <Lang page="Header" word="View" />
        <Icons iconName="arrow" />
      </a>
      <LanguageButton />
    </div>
  </div>
</header>
