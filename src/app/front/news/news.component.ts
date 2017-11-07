import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  public menu: string[];
  public selectedtitle;
  constructor() { }

ngOnInit() {
    this.parentRoute = '/news';
    this.parentRouteName = 'News';
    this.createmenu();
  }
  createmenu(){
  	   this.menu = new Array<string>();
    this.menu.push('Depeartment News');
    this.menu.push('Course News');
    this.menu.push('Event');
    this.menu.push('School leadership');
    this.menu.push('Calender');
    this.selectedtitle = this.menu[0];

  }

}
