import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {ArticleSize} from "../../shared/enum/article-size.enum";

@Component({
  selector: 'research-details',
  templateUrl: './research-details.component.html',
  styleUrls: ['./research-details.component.css']
})
export class ResearchDetailsComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  titles: string[];
  selectedTitle: string;

  constructor() {
  }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //    this.selectedTitle = params['title'];
    //  });
    //  this.parentRoute = '/introduction';
    //  this.parentRouteName = 'Introduction';
    //  this.titles = ['About us', 'Facility & Advisor', 'Department structure & Staff', 'Contact'];
    //  this.selectedTitle = this.titles[0];
  }

}
