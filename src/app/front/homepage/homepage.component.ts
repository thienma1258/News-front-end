import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {Event} from '../../shared/model/event';
import {ArticleService} from '../../shared/services/article.service';
import {EventService} from '../../shared/services/event.service';
import {ArticleType} from '../../shared/enum/article-type.enum';
import {Slide} from "../../shared/model/slide";
import {Information} from "../../shared/model/information";
import {InformationService} from "../../shared/services/information.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public slides: Slide[] = [];
  public latestArticles: Article[] = [];
  public upcomingEvents: Event[] = [];
  public aboutArticle: Article;
  public informations: Information[] = [];

  constructor(public articleService: ArticleService, public eventService: EventService,
              public informationService: InformationService) {
    this.aboutArticle = new Article();
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    this.articleService.getArticles(String(ArticleType.About)).subscribe(
      data => {
        this.aboutArticle = data['content'][0];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getSlides().subscribe(
      data => {
        this.slides = data['content'];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getLatestNews().subscribe(
      data => {
        this.latestArticles = data['content'];
        console.log(this.latestArticles);
      },
      err => {
        console.log(err);
      }
    );
    this.eventService.getUpcomingEvent().subscribe(
      data => {
        this.upcomingEvents = data['content'];
        console.log(this.upcomingEvents);
      },
      err => {
        console.log(err);
      }
    );
    this.informationService.getInformations().subscribe(
      data => {
        this.informations = data['content'];
      },
      err => {
        console.log(err);
      }
    );
  }

}
