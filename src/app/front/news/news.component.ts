import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {ActivatedRoute} from '@angular/router';
import {ArticleSize} from "../../shared/enum/article-size.enum";
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  public menu: any;
  public selectedTitle;
  public articles: Article[];
  public showcalender:boolean;
  constructor(private translate: TranslateService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.translate.get(['Homepage.DepartmentNews', 'Homepage.CourseNews', 'Homepage.Event', 'Homepage.SchoolLeaderShip', 'Homepage.Calendar']).subscribe(
      res => {
        console.log(res['Homepage.FacultyAdvisor']);
        this.menu = [
          {
            'route': 'department-news',
            'name': res['Homepage.DepartmentNews']
          },
          {
            'route': 'course-news',
            'name': res['Homepage.CourseNews']
          },
          {
            'route': 'event',
            'name': res['Homepage.Event']
          },
          {
            'route': 'school-leadership',
            'name': res['Homepage.SchoolLeaderShip']
          },
          {
            'route': 'calendar',
            'name': res['Homepage.Calendar']
          }
        ];
      });
    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.translate.get(['Homepage.DepartmentNews', 'Homepage.CourseNews', 'Homepage.Event', 'Homepage.SchoolLeaderShip', 'Homepage.Calendar']).subscribe(
        res => {
          this.menu = [
            {
              'route': 'department-news',
              'name': res['Homepage.DepartmentNews']
            },
            {
              'route': 'course-news',
              'name': res['Homepage.CourseNews']
            },
            {
              'route': 'event',
              'name': res['Homepage.Event']
            },
            {
              'route': 'school-leadership',
              'name': res['Homepage.SchoolLeaderShip']
            },
            {
              'route': 'calendar',
              'name': res['Homepage.Calendar']
            }
          ];
        }
      );
    });
    this.route.params.subscribe(params => {
      this.selectedTitle = params['title'];
      if(this.selectedTitle == 'calendar'){
        this.showcalender=true;
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
