import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, MissingTranslationStrategy } from '@angular/core';
import { CompilerConfig } from '@angular/compiler';
import {Utility} from './shared/services/utility.services';
export function getTranslationProviders(): Promise<Object[]> {

  // Get the locale id from the global
  let locale = document['locale'] as string;
  // return no providers if fail to get translation file for locale
  const noProviders: Object[] = [];

  // No locale or U.S. English: no translation providers
  if (!locale || locale === 'en-US') {
    return Promise.resolve(noProviders);
  }

  // Ex: 'locale/messages.es.xlf`
  const translationFile = './locale/messages.' + locale + '.xlf';

  return getTranslationsWithSystemJs(translationFile)
    .then( (translations: string ) => [
      { provide: TRANSLATIONS, useValue: translations },
      { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
      { provide: LOCALE_ID, useValue: locale },
      { provide: CompilerConfig, useValue: new CompilerConfig({ missingTranslation: MissingTranslationStrategy.Error }) }
    ])
    .catch(() => noProviders); // ignore if file not found
}

declare var System: any;

function getTranslationsWithSystemJs(file: string) {
  //const util=new Utility();
  //return util.getFile(file);
  return System.import(file + '!text'); // relies on text plugin
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
