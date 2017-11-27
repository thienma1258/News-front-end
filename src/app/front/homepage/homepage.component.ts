import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {Event} from '../../shared/model/event';
import {ArticleService} from '../../shared/services/article.service';
import {EventService} from '../../shared/services/event.service';
import {ArticleType} from '../../shared/enum/article-type.enum';

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
    this.aboutArticle = new Article();
    this.admissionsArticle = new Article();
    this.academicsArticle = new Article();
    this.researchArticle = new Article();
    this.studentLifeArticle = new Article();
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    this.articleService.getArticle(String(ArticleType.About)).subscribe(
      data => {
        this.aboutArticle = data['content'][0];
      },
      err => {
        console.log(err);
      }
    );
    for (let i = 0; i < 3; i++) {
      this.upcomingEvents.push(this.eventService.getEvent(String(i)));
    }
  }

}
