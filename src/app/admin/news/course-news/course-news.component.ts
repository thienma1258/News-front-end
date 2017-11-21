import {Component, OnInit} from '@angular/core';
import {Article} from "../../../shared/interface/article";
import {Router} from "@angular/router";

@Component({
  selector: 'course-news',
  templateUrl: './course-news.component.html',
  styleUrls: ['./course-news.component.css']
})
export class CourseNewsComponent implements OnInit {


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  addNewArticle() {
    this.router.navigate(['/admin/news/addnew', {
      type: 'course-news'
    }]);
  }
}
