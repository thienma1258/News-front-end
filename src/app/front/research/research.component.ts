import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  public menu: string[];
  public selectedtitle;

  constructor() {
  }

  createmenu() {
    this.menu = new Array<string>();
    this.menu.push('Research News');
    this.menu.push('Laboratory');
    this.menu.push('Conferences and seminars');
    this.menu.push('Area');
    this.menu.push('Poster');
    this.selectedtitle = this.menu[0];
  }

  ngOnInit() {
    this.parentRoute = '/research';
    this.parentRouteName = 'Research';
    this.createmenu();
  }

}
