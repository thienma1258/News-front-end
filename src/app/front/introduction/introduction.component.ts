import {Component, OnInit} from '@angular/core';
import {SubMenuComponent} from '../shared/sub-menu/sub-menu.component';
import {FacebookService, InitParams} from 'ngx-facebook';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  titles: string[];
  selectedTitle: string;

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '1291648807589933',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

  ngOnInit() {
    this.titles = ['About us', 'Facility & Advisor', 'Department structure & Staff', 'Contact'];
    this.selectedTitle = this.titles[0];
  }
}
