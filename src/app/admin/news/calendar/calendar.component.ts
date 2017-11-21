import { Component, OnInit } from '@angular/core';
import {Article} from '../../../shared/interface/article';
import {Router} from '@angular/router';
import {ArticleSize} from '../../../shared/enum/article-size.enum';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewArticle() {
    this.router.navigate(['/admin/news/addnew', {
      type: 'calendar'
    }]);
  }
}
