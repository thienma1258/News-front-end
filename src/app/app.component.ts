import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

export const ASSERT_IMAGES_URL = './../../../../assets/images/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  langue;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('zh-tw');
  }

  ngOnInit() {
    sessionStorage.getItem('lan') == null ? sessionStorage.setItem('lan', 'en') : '';
    this.langue = sessionStorage.getItem('lan');
  }

  OnChangeLangue($event) {
    console.log($event.target.value);
    sessionStorage.setItem('lan', $event.target.value);
    window.location.reload();
  }
}
