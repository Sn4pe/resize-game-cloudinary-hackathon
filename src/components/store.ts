import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

const browserLanguage = navigator.language.substr(0,2);

const defaultLanguage = browserLanguage === 'en' || browserLanguage === 'es' ? browserLanguage : 'en'; 

const languageStore: Writable<string> = writable(defaultLanguage);

const lang = {
  subscribe: languageStore.subscribe,
  set: (language: string) => {
    if(language === 'en' || language === 'es') {
      languageStore.set(language);
    } else {
      languageStore.set('en');
    }
  },
  current: defaultLanguage, 
};

languageStore.subscribe(language => {
  lang.current = language;
});

export default lang;
