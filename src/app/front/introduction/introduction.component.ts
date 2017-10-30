import {Component, OnInit} from '@angular/core';
import {SubMenuComponent} from '../shared/sub-menu/sub-menu.component';

@Component({
  selector: 'introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  titles: string[] = ['About us', 'Facility & Advisor', 'Department structure & Staff', 'Contact'];

  constructor() {
  }

  ngOnInit() {
  }

}
