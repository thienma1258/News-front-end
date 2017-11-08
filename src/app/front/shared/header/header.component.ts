import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isToggleMenuExpanded = false;
  language = 'English';
  locale = 'en';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.isToggleMenuExpanded = (this.isToggleMenuExpanded !== true);
  }

  switchLanguage() {
    this.language = (this.language === 'English' ? '中文' : 'English');
    this.locale = (this.locale === 'en' ? 'zh-tw' : 'en');
    this.translate.use(this.locale);
  }
}
