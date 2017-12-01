import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {Event} from '../../shared/model/event';
import {ArticleService} from '../../shared/services/article.service';
import {EventService} from '../../shared/services/event.service';
import {ArticleType} from '../../shared/enum/article-type.enum';
import {Slide} from "../../shared/model/slide";

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
  public admissionsArticle: Article;
  public academicsArticle: Article;
  public researchArticle: Article;
  public studentLifeArticle: Article;

  constructor(public articleService: ArticleService, public eventService: EventService) {
    this.aboutArticle = new Article();
    this.admissionsArticle = new Article();
    this.academicsArticle = new Article();
    this.researchArticle = new Article();
    this.studentLifeArticle = new Article();

    // this.slides = [
    //   {
    //     id: '1',
    //     englishTitle: 'english title 1',
    //     chineseTitle: 'chinese title 1',
    //     englishContent: 'english content',
    //     chineseContent: 'chinese content',
    //     slideImageUrl: './assets/images/001.jpg'
    //   },
    //   {
    //     id: '2',
    //     englishTitle: 'english title 2',
    //     chineseTitle: 'chinese title 2',
    //     englishContent: 'english content',
    //     chineseContent: 'chinese content',
    //     slideImageUrl: './assets/images/001t.jpg'
    //   },
    //   {
    //     id: '3',
    //     englishTitle: 'english title 3',
    //     chineseTitle: 'chinese title 3',
    //     englishContent: 'english content',
    //     chineseContent: 'chinese content',
    //     slideImageUrl: './assets/images/070.jpg'
    //   }
    // ];
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
  }

}
