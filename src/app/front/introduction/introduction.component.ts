import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../shared/services/article.service';
import {Article} from '../../shared/interface/article';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  titles: any = [
    {
      'route': 'about-us',
      'name': 'About us'
    },
    {
      'route': 'facility-advisor',
      'name': 'Facility advisor'
    },
    {
      'route': 'department-structure-staff',
      'name': 'Department structure and staff'
    },
    {
      'route': 'contact',
      'name': 'Contact'
    }
  ];
  selectedTitle: string;
  article: Article;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
  }

  ngOnInit() {
    this.parentRoute = '/introduction';
    this.parentRouteName = 'Introduction';
    this.route.params.subscribe(params => {
      this.selectedTitle = params['title'];
      switch (this.selectedTitle) {
        case 'about-us':
          this.selectedTitle = 'About us';
          this.article = this.articleService.getArticle('3');
          break;
        case 'facility-advisor':
          this.selectedTitle = 'Facility Advisor';
          this.article = this.articleService.getArticle('4');
          break;
        case 'department-structure-staff':
          this.selectedTitle = 'Department Structure & Staff';
          this.article = this.articleService.getArticle('5');
          break;
        case 'contact':
          this.selectedTitle = 'Contact';
          this.article = this.articleService.getArticle('6');
          break;
      }
    });
  }
}
