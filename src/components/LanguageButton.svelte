<script lang="ts">
  import lang from './store';

  function changeLanguage() {
    let currentLanguage = '';
    lang.subscribe((value) => {
      currentLanguage = value;
    })();
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    lang.set(newLanguage);
  }
</script>

<button
  on:click={changeLanguage}
  class="block rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring"
  >ES/EN</button
>
