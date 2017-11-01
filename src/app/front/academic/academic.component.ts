import {Component, OnInit} from '@angular/core';
import {FacebookService, InitParams} from 'ngx-facebook';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {
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
    this.titles = [
      'Academic Information',
      'Student Graduate & Undergraduate',
      'Teaching',
      'Degree Requirement'
    ];
    this.selectedTitle = this.titles[0];
  }

}
