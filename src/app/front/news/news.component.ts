import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {ActivatedRoute} from '@angular/router';
import {ArticleSize} from "../../shared/enum/article-size.enum";
import {ArticleService} from '../../shared/services/article.service';
@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  currentroute: string;
  article: Article;
  public menu: any = [
    {
      'route': 'department-news',
      'name': 'Department News'
    },
    {
      'route': 'course-news',
      'name': 'Course News'
    },
    {
      'route': 'event',
      'name': 'Event'
    },
    {
      'route': 'school-leadership',
      'name': 'School Leadership'
    },
    {
      'route': 'calendar',
      'name': 'Calendar'
    }
  ];
  public selectedTitle;
  public articles: Article[]= [];
  public showcalender: boolean;
  constructor(private route: ActivatedRoute, private articleservices: ArticleService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedTitle = params['title'];
      this.currentroute = this.selectedTitle;
      if (params['id'] !== undefined){

            this.articleservices.getArticlesById(params['id']).subscribe(data => {
              this.article = data['content'];

            });

                return;
              }
      if (this.selectedTitle === 'calendar'){
        this.showcalender = true;
      }
      else{
        this.showcalender = false;
      }
      if (this.selectedTitle === 'department-news'){
        this.articleservices.getArticles('DepartmentNews').subscribe(data => {
          this.articles = data['content'];
        });
      }
      else if (this.selectedTitle  === 'course-news'){
        this.articleservices.getArticles('CourseNews').subscribe(data => {
          this.articles = data['content'];
        });
      }
      // tslint:disable-next-line:one-line
      else if (this.selectedTitle === 'event'){
        this.articleservices.getArticles('Event').subscribe(data => {
          this.articles = data['content'];
        });
      }
      else if (this.selectedTitle === 'school-leadership'){
        this.articleservices.getArticles('SchoolLeadership').subscribe(data => {
          this.articles = data['content'];
        });
      }
      for (const title of this.menu) {
        if (title.route === this.selectedTitle) {
          this.selectedTitle = title.name;
        }
      }
    });
    this.parentRoute = '/news';
    this.parentRouteName = 'News';
  }

  getarticle() {

    return ;
  }

}
