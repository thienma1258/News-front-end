import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/interface/article';
import {ActivatedRoute} from "@angular/router";
import {ArticleSize} from "../../shared/enum/article-size.enum";

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  public menu: any = [
    {
      'route': 'research-news',
      'name': 'Research News'
    },
    {
      'route': 'laboratory',
      'name': 'Laboratory'
    },
    {
      'route': 'conferences-and-seminars',
      'name': 'Conferences & Seminars'
    },
    {
      'route': 'area',
      'name': 'Area'
    },
    {
      'route': 'poster',
      'name': 'Poster'
    }
  ];
  public selectedTitle;
  public articles: Article[];

  constructor(private route: ActivatedRoute) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  createmenu() {
    this.menu = new Array<string>();
    this.menu.push();
    this.menu.push();
    this.menu.push();
    this.menu.push();
    this.menu.push('poster');
    // this.selectedtitle = this.menu[0];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedTitle = params['title'];
      for (const title of this.menu) {
        if (title.route === this.selectedTitle) {
          this.selectedTitle = title.name;
        }
      }
    });
    this.parentRoute = '/research';
    this.parentRouteName = 'Research';
  }

  getArticle() {
    return ;
  }

}
