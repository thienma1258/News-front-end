import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {UniversityService} from "../../../shared/services/university.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private locale = 'en';

  isToggleMenuExpanded = false;
  language = '中文';

  private universityEnglishName;
  private universityChineseName;

  private departmentEnglishName;
  private departmentChineseName;

  constructor(private translate: TranslateService, private universityService: UniversityService) {
    this.locale = 'en';
    localStorage.setItem('locale', 'en');
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.universityService.getUniversityInfo().subscribe(
      data => {
        const englishName = data['content'].englishName;
        const chineseName = data['content'].chineseName;

        this.universityEnglishName = englishName.split('-')[0];
        this.departmentEnglishName = englishName.split('-')[1];

        this.universityChineseName = chineseName.split('-')[0];
        this.departmentChineseName = chineseName.split('-')[1];
      },
      err => {
        console.log(err);
      }
    );
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
