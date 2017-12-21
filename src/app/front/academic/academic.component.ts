import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../shared/services/article.service';
import {ArticleType} from '../../shared/enum/article-type.enum';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  titles: any;
  selectedTitle: string;
  article: Article;

  constructor(private translate: TranslateService, public route: ActivatedRoute, public articleService: ArticleService) {
  }

  ngOnInit() {
    this.translate.get(['Homepage.AcademicInformation', 'Homepage.StudentGraduate',
      'Homepage.Teaching', 'Homepage.DegreeRequirement', 'Homepage.AdmissionInformation', 'Homepage.Guideline']).subscribe(
      res => {
        console.log(res['Homepage.FacultyAdvisor']);
        this.titles = [
          {
            'route': 'academic-information',
            'name': res['Homepage.AcademicInformation']
          },
          {
            'route': 'admission-information',
            'name': res['Homepage.AdmissionInformation']
          },
          {
            'route': 'student-graduate-and-undergraduate',
            'name': res['Homepage.StudentGraduate']
          },
          {
            'route': 'teaching',
            'name': res['Homepage.Teaching']
          },
          {
            'route': 'degree-requirement',
            'name': res['Homepage.DegreeRequirement']
          },
          {
            'route': 'guideline',
            'name': res['Homepage.Guideline']
          }
        ];
      });
    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.translate.get(['Homepage.AcademicInformation', 'Homepage.StudentGraduate',
        'Homepage.Teaching', 'Homepage.DegreeRequirement', 'Homepage.AdmissionInformation', 'Homepage.Guideline']).subscribe(
        res => {
          this.titles = [
            {
              'route': 'academic-information',
              'name': res['Homepage.AcademicInformation']
            },
            {
              'route': 'admission-information',
              'name': res['Homepage.AdmissionInformation']
            },
            {
              'route': 'student-graduate-and-undergraduate',
              'name': res['Homepage.StudentGraduate']
            },
            {
              'route': 'teaching',
              'name': res['Homepage.Teaching']
            },
            {
              'route': 'degree-requirement',
              'name': res['Homepage.DegreeRequirement']
            },
            {
              'route': 'guideline',
              'name': res['Homepage.Guideline']
            }
          ];
        }
      );
    });
    this.route.params.subscribe(params => {
      this.selectedTitle = params['title'];
      switch (this.selectedTitle) {
        case 'academic-information':
          this.selectedTitle = 'Academic Information';
          this.articleService.getArticles(String(ArticleType.AcademicInfo)).subscribe(
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
          this.articleService.getArticles(String(ArticleType.StudentGraduate)).subscribe(
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
          this.articleService.getArticles(String(ArticleType.Teaching)).subscribe(
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
          this.articleService.getArticles(String(ArticleType.DegreeRequirement)).subscribe(
            data => {
              this.article = data['content'][0];
            },
            err => {
              console.log(err);
            }
          );
          break;
        case 'admission-information':
          this.selectedTitle = 'Admission Information';
          this.articleService.getArticles(String(ArticleType.AdmissionInfo)).subscribe(
            data => {
              this.article = data['content'][0];
            },
            err => {
              console.log(err);
            }
          );
          break;
        case 'guideline':
          this.selectedTitle = 'Guideline';
          this.articleService.getArticles(String(ArticleType.Guideline)).subscribe(
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
