import {CompilerOptions, enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {getTranslationProviders} from './i18n-providers';

if (environment.production) {
  enableProdMode();
}

getTranslationProviders(environment.production).then((providers: CompilerOptions[]) => {
  const options = { providers };
  platformBrowserDynamic().bootstrapModule(AppModule, options);
});
