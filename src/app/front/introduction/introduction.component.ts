import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../shared/services/article.service';
import {Article} from '../../shared/model/article';
import {ArticleType} from '../../shared/enum/article-type.enum';

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
          this.articleService.getArticle(String(ArticleType.About)).subscribe(
            data => {
              this.article = data['content'];
            },
            err => {
              console.log(err);
            }
          );
          break;
        case 'facility-advisor':
          this.selectedTitle = 'Facility Advisor';
          this.articleService.getArticle(String(ArticleType.FacultyAdvisor)).subscribe(
            data => {
              this.article = data['content'];
            },
            err => {
              console.log(err);
            }
          );
          break;
        case 'department-structure-staff':
          this.selectedTitle = 'Department Structure & Staff';
          this.articleService.getArticle(String(ArticleType.DepartmentStructure)).subscribe(
            data => {
              this.article = data['content'];
            },
            err => {
              console.log(err);
            }
          );
          break;
        case 'contact':
          this.selectedTitle = 'Contact';
          this.articleService.getArticle(String(ArticleType.Contact)).subscribe(
            data => {
              this.article = data['content'];
            },
            err => {
              console.log(err);
            }
          );
          break;
      }
    });
  }
}
