import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/interface/article';
import {Event} from '../../shared/interface/event';
import {ArticleService} from '../../shared/services/article.service';
import {EventService} from '../../shared/services/event.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  private highlightArticles: Article[] = [];
  private latestArticles: Article[] = [];
  private upcomingEvents: Event[] = [];
  private aboutArticle: Article;
  private admissionsArticle: Article;
  private academicsArticle: Article;
  private researchArticle: Article;
  private studentLifeArticle: Article;

  constructor(private articleService: ArticleService, private eventService: EventService) {
  }

  get LanguageLocale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    for (let i = 0; i < 3; i++) {
      this.highlightArticles.push(this.articleService.getArticle(String(i)));
      this.latestArticles.push(this.articleService.getArticle(String(i)));
    }
    this.aboutArticle = this.articleService.getArticle('3');
    this.admissionsArticle = this.articleService.getArticle('4');
    this.academicsArticle = this.articleService.getArticle('5');
    this.researchArticle = this.articleService.getArticle('6');
    this.studentLifeArticle = this.articleService.getArticle('7');
    for (let i = 0; i < 3; i++) {
      this.upcomingEvents.push(this.eventService.getEvent(String(i)));
    }
  }

}
