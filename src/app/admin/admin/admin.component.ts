import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  language = 'English';
  locale = 'zh-tw';
  isToggleMenuExpanded = false;
  userName: string;

  constructor(private authService: AuthService) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    this.locale = this.Locale;
    this.language = (this.locale === 'en' ? '中文' : 'English');
    this.userName = localStorage.getItem('username');
  }

  toggleMenu() {
    this.isToggleMenuExpanded = !this.isToggleMenuExpanded;
  }

  switchLanguage() {
    this.language = (this.language === 'English' ? '中文' : 'English');
    this.locale = (this.locale === 'en' ? 'zh-tw' : 'en');
    localStorage.setItem('locale', this.locale);
  }

  logout() {
    this.authService.logout().subscribe(
      data => {

      },
      err => {

      }
    );
  }
}
