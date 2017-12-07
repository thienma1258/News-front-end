import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {ActivatedRoute} from '@angular/router';
import {ArticleSize} from "../../shared/enum/article-size.enum";

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
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
  public articles: Article[];
  public showcalender:boolean;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
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
