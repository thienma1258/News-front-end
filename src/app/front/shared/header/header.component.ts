import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private locale = 'en';

  isToggleMenuExpanded = false;
  language = '中文';

  constructor(private translate: TranslateService) {
    this.locale = 'en';
    localStorage.setItem('locale', 'en');
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
    localStorage.setItem('locale', this.locale);
    this.translate.use(this.locale);
  }
}
