import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import defaultLanguage from '../assets/i18n/en-US.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ngxs-material-starter';

  constructor(private translateService: TranslateService) {
    translateService.setTranslation('en-US', defaultLanguage);
    translateService.setDefaultLang('en-US');
  }
}
