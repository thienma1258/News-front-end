import { Component, OnInit } from '@angular/core';
import {Article} from '../../../shared/model/article';
import {Router} from '@angular/router';
import {ArticleService} from '../../../shared/services/article.service';
import {ArticleType} from '../../../shared/enum/article-type.enum';

@Component({
  selector: 'department-news',
  templateUrl: './department-news.component.html',
  styleUrls: ['./department-news.component.css']
})
export class DepartmentNewsComponent implements OnInit {
  public articles: Article[] = [];

  constructor(private router: Router, private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles(String(ArticleType.DepartmentNews)).subscribe(
      data => {
        this.articles = data['content'];
      },
      err => {
        console.log(err);
      }
    );
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  addNewArticle() {
    this.router.navigate(['/admin/news/done', {
      type: 'department-news'
    }]);
  }
}
