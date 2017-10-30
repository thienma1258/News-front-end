import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {getTranslationProviders} from './app/i18n-providers';
import {AppModule} from './app/app.module';
import {TranslateEs} from './app/locale/messages.es';
import {TranslateEn} from './app/locale/messages.en';
import {environment} from './environments/environment';
import {TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, MissingTranslationStrategy} from '@angular/core';

if (environment.production) {
  enableProdMode();
}
let langue = TranslateEs;
platformBrowserDynamic().bootstrapModule(
  AppModule, sessionStorage.getItem('lan') !== 'en' && sessionStorage.getItem('lan') != null ? {
    providers: [
      {provide: TRANSLATIONS, useValue: langue},
      {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
      {provide: LOCALE_ID, useValue: 'en'}
    ]
  } : {});
// getTranslationProviders().then(providers => {
//   const options = { providers };
//   platformBrowserDynamic().bootstrapModule(AppModule, options);
// });
