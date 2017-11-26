import { Component, OnInit } from '@angular/core';
import {Article} from '../../../shared/model/article';
import {Router} from '@angular/router';
import {ArticleService} from '../../../shared/services/article.service';

@Component({
  selector: 'department-news',
  templateUrl: './department-news.component.html',
  styleUrls: ['./department-news.component.css']
})
export class DepartmentNewsComponent implements OnInit {
  private articles: Article[] = [];

  constructor(private router: Router, private articleService: ArticleService) {
  }

  ngOnInit() {
    for (let i = 0; i < 6; i++) {
      this.articles.push(this.articleService.getArticle(String(i)));
    }
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  addNewArticle() {
    this.router.navigate(['/admin/news/addnew', {
      type: 'department-news'
    }]);
  }
}
