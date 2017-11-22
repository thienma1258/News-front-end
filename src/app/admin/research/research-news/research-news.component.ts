import {Component, OnInit} from '@angular/core';
import {Article} from '../../../shared/interface/article';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../../shared/services/article.service';

@Component({
  selector: 'research-news',
  templateUrl: './research-news.component.html',
  styleUrls: ['./research-news.component.css']
})
export class ResearchNewsComponent implements OnInit {
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
    this.router.navigate(['/admin/research/addnew', {
      type: 'research-news'
    }]);
  }
}
