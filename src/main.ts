import {CompilerOptions, enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {getTranslationProviders} from './i18n-providers';

if (environment.production) {
  enableProdMode();
}

// we assume that environment.production means that we are using AOT
// you can define your own env parameters in /src/environments
getTranslationProviders(environment.production).then((providers: CompilerOptions[]) => {
  const options = { providers };
  platformBrowserDynamic().bootstrapModule(AppModule, options);
});
