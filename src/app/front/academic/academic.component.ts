import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from "../../shared/services/article.service";
import {ArticleType} from "../../shared/enum/article-type.enum";

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  titles: any = [
    {
      'route': 'academic-information',
      'name': 'Academic Information'
    },
    {
      'route': 'student-graduate-and-undergraduate',
      'name': 'Student graduate and undergraduate',
    },
    {
      'route': 'teaching',
      'name': 'Teaching',
    },
    {
      'route': 'degree-requirement',
      'name': 'Degree requirement'
    }
  ];
  selectedTitle: string;
  article: Article;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedTitle = params['title'];
      switch (this.selectedTitle) {
        case 'academic-information':
          this.selectedTitle = 'Academic Information';
          this.articleService.getArticle(String(ArticleType.AcademicInfo)).subscribe(
            data => {
              this.article = data['content'][0];
            },
            err => {
              console.log(err);
            }
          );
          break;
        case 'student-graduate-and-undergraduate':
          this.selectedTitle = 'Student Graduate & Undergraduate';
          this.articleService.getArticle(String(ArticleType.StudentGraduate)).subscribe(
            data => {
              this.article = data['content'][0];
            },
            err => {
              console.log(err);
            }
          );
          break;
        case 'teaching':
          this.selectedTitle = 'Teaching';
          this.articleService.getArticle(String(ArticleType.Teaching)).subscribe(
            data => {
              this.article = data['content'][0];
            },
            err => {
              console.log(err);
            }
          );
          break;
        case 'degree-requirement':
          this.selectedTitle = 'Degree Requirement';
          this.articleService.getArticle(String(ArticleType.DegreeRequirement)).subscribe(
            data => {
              this.article = data['content'][0];
            },
            err => {
              console.log(err);
            }
          );
          break;
      }
    });
    this.parentRoute = '/academic';
    this.parentRouteName = 'Academic & Admissions';
  }
}
