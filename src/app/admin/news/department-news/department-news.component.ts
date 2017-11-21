import { Component, OnInit } from '@angular/core';
import {Article} from "../../../shared/interface/article";
import {Router} from "@angular/router";

@Component({
  selector: 'department-news',
  templateUrl: './department-news.component.html',
  styleUrls: ['./department-news.component.css']
})
export class DepartmentNewsComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewArticle() {
    this.router.navigate(['/admin/news/addnew', {
      type: 'department-news'
    }]);
  }
}
