<script lang="ts">
  import Generate from './lib/GenerarImg.svelte';
  import Lang from './components/Lang.svelte';
  import Footer from './components/Footer.svelte';
  import Header from './components/Header.svelte';
</script>

<div class="flex flex-col items-center justify-center min-h-screen">
  <Header />
  <section
    class="flex flex-1 w-full flex-col items-center max-w-screen-xl mx-auto lg:flex-row lg:justify-evenly lg:my-6 "
  >
    <div class="max-w-xl bg-gray-900 text-center m-4 lg:text-left mx-8">
      <h2
        class="bg-gradient-to-r from-green-300 via-green-500 to-green-600 bg-clip-text text-2xl font-extrabold text-transparent md:text-3xl"
      >
        <Lang page="App" word="t1" />
      </h2>
      <p class="text-gray-300 text-sm mt-4 md:block md:text-lg">
        <Lang page="App" word="p1" />
      </p>
      <p class="text-gray-400 mt-3">
        <Lang page="App" word="organized" />
        <a
          href="https://midu.dev/"
          rel="noreferrer"
          target="_blank"
          class="transition hover:opacity-75 text-gray-300"
        >
          midudev
        </a>
        <Lang page="App" word="sponsored" />

        <a
          href="https://cloudinary.com/"
          rel="noreferrer"
          target="_blank"
          class="transition hover:opacity-75 text-gray-300"
        >
          Cloudinary
        </a>
      </p>
    </div>

    <Generate />
  </section>
  <Footer />
</div>
