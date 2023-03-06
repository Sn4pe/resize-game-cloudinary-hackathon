import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

const browserLanguage = navigator.language.substr(0,2); // Obtiene el código de idioma del navegador

const defaultLanguage = browserLanguage === 'en' || browserLanguage === 'es' ? browserLanguage : 'en'; // Configura el idioma predefinido a "en" si no es "en" ni "es"

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
