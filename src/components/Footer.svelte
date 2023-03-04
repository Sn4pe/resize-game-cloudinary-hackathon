<script>
  import Icons from '../lib/Icons.svelte';
  import Lang from './Lang.svelte';
</script>

<footer aria-label="Site Footer" class="w-full bg-gray-900 sm:px-6 xl:px-24">
  <div class=" mx-auto ">
    <div
      class="pt-7 border-t border-gray-800 sm:flex sm:items-center sm:justify-between sm:pt-3"
    >
      <nav>
        <ul class="flex flex-wrap justify-center gap-4 text-xs">
          <li>
            <p class="text-gray-400">
              <Lang page="Footer" word="developed" />
              <a
                href="https://sn4pe.com/"
                rel="noreferrer"
                target="_blank"
                class="transition hover:opacity-75 text-gray-300"
              >
                Sn4pe
              </a>
              <Lang page="Footer" word="Logo design" />
              <a
                href="https://noeart.es/"
                rel="noreferrer"
                target="_blank"
                class="transition hover:opacity-75 text-gray-300"
              >
                Noeart
            </p>
          </li>
          <li />
        </ul>
      </nav>

      <ul class="flex justify-center gap-6 py-4 sm:mt-0 lg:justify-end">
        <li>
          <a
            href="https://www.instagram.com/sn4pedev/"
            rel="noreferrer"
            target="_blank"
            class="transition hover:opacity-75 text-gray-200"
          >
            <span class="sr-only">Instagram</span>
            <Icons iconName="instagram" />
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/Sn4pe_"
            rel="noreferrer"
            target="_blank"
            class="transition hover:opacity-75 text-gray-200"
          >
            <span class="sr-only">Twitter</span>

            <Icons iconName="twitter" />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/Sn4pe"
            rel="noreferrer"
            target="_blank"
            class="transition hover:opacity-75 text-gray-200"
          >
            <span class="sr-only">GitHub</span>

            <Icons iconName="github" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
