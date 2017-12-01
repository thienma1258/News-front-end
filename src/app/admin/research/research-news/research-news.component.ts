import {Component, OnInit} from '@angular/core';
import {Article} from '../../../shared/model/article';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../../shared/services/article.service';
import {ArticleType} from "../../../shared/enum/article-type.enum";

@Component({
  selector: 'research-news',
  templateUrl: './research-news.component.html',
  styleUrls: ['./research-news.component.css']
})
export class ResearchNewsComponent implements OnInit {
  public articles: Article[] = [];

  constructor(public router: Router, public articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles(String(ArticleType.ResearchNews)).subscribe(
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
    this.router.navigate(['/admin/research/addnew', {
      type: 'research-news'
    }]);
  }
}
