import {APP_BASE_HREF} from "@angular/common";
import {LOCALE_ID, NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {getLang} from "../i18n-providers";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

export function appBaseHrefProvider(locale: string) {
  locale = locale.match(/^(en|fr)$/) ? locale : getLang();
  document.querySelector('base').href = `/${locale}`;
  return `/${locale}`;
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useFactory: appBaseHrefProvider, deps: [LOCALE_ID]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
