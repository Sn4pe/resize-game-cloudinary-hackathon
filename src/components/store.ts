import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

const defaultLanguage = navigator.language.substr(0, 2) || 'en';

const languageStore: Writable<string> = writable(defaultLanguage);

const lang = {
  subscribe: languageStore.subscribe,
  set: (language: string) => {
    languageStore.set(language);
  },
};

export default lang;
