import {Component, Inject, LOCALE_ID} from "@angular/core";
import {getLang} from "../i18n-providers";

@Component({
  selector: 'app-root',
  template: `
    <h1 i18n>Hello world</h1>
    <span i18n>Select your language:</span>
    <select [(ngModel)]="lang" (ngModelChange)="onLangChange($event)">
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  lang = 'en';

  constructor(@Inject(LOCALE_ID) private localeId: string) {
    this.lang = localeId.match(/^(en|fr)$/) ? localeId : getLang();
  }

  onLangChange(lang: string) {
    window.location.href = `/${lang}/`;
  }
}
