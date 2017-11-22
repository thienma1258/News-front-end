import { Component, OnInit } from '@angular/core';
import {Article} from '../../../shared/interface/article';
import {Router} from '@angular/router';
import {ArticleService} from '../../../shared/services/article.service';

@Component({
  selector: 'school-leadership',
  templateUrl: './school-leadership.component.html',
  styleUrls: ['./school-leadership.component.css']
})
export class SchoolLeadershipComponent implements OnInit {
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
      type: 'school-leadership'
    }]);
  }
}
