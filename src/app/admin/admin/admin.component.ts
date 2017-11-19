import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  language = 'English';
  isToggleMenuExpanded = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.isToggleMenuExpanded = !this.isToggleMenuExpanded;
  }

  switchLanguage() {

  }
}
