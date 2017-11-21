import { Component, OnInit } from '@angular/core';
import {Article} from "../../../shared/interface/article";
import {Router} from "@angular/router";
import {ArticleSize} from "../../../shared/enum/article-size.enum";

@Component({
  selector: 'school-leadership',
  templateUrl: './school-leadership.component.html',
  styleUrls: ['./school-leadership.component.css']
})
export class SchoolLeadershipComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewArticle() {
    this.router.navigate(['/admin/news/addnew', {
      type: 'school-leadership'
    }]);
  }
}
