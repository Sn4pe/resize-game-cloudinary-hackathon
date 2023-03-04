<script lang="ts">
  import lang from './store';
  import { languages } from './Languages';
  export let page: string;
  export let word: string;
</script>

{languages[page][word][$lang]}
