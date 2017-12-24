import {Component, OnInit} from '@angular/core';
import {Article} from '../../../shared/model/article';
import {Router} from '@angular/router';
import {ArticleService} from '../../../shared/services/article.service';
import {ArticleType} from "../../../shared/enum/article-type.enum";
import {EmitterService} from "../../shared/emitter.service";

@Component({
  selector: 'research-news',
  templateUrl: './research-news.component.html',
  styleUrls: ['./research-news.component.css']
})
export class ResearchNewsComponent implements OnInit {
  public articles: Article[] = [];

  public eventEmitter = EmitterService.get('RESEARCH-NEWS');

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

    this.eventEmitter.subscribe(msg => {
      this.articles.forEach(element => {
        if (element.id === msg) {
          alert('deleted ' + msg);
          this.articles.splice(this.articles.indexOf(element), 1);
        }
      });
    });
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  addNewArticle() {
    this.router.navigate(['/admin/research/done', {
      type: 'research-news'
    }]);
  }
}
