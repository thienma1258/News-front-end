import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../shared/services/article.service';
import {Article} from '../../shared/model/article';
import {ArticleType} from '../../shared/enum/article-type.enum';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
import {AdvisorGroup} from '../../shared/enum/advisor-group.enum';
import {Laboratory} from '../../shared/model/laboratory.model';
import {LaboratoryServices} from '../../shared/services/laboratory.service';
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  titles: any;
  selectedTitle: string;
  article: Article;
  Laboratory: Laboratory[]= [];
  public isFaculty = false;
  public isLaboratories= false;
  public advisorGroup = AdvisorGroup;

  constructor(private translate: TranslateService,
     private route: ActivatedRoute,
      private articleService: ArticleService,
    private laboratoryServices: LaboratoryServices) {
    this.article = new Article();
  }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.translate.get(['Homepage.AboutUs', 'Homepage.FacultyAdvisor', 'Homepage.DepartmentStructureStaff', 'Homepage.Laboratories', 'Homepage.Contact']).subscribe(
      res => {
        console.log(res);
        this.titles = [
          {
            'route': 'about-us',
            'name': res['Homepage.AboutUs']
          },
          {
            'route': 'facility-advisor',
            'name': res['Homepage.FacultyAdvisor']
          },
          {
            'route': 'department-structure-staff',
            'name': res['Homepage.DepartmentStructureStaff']
          },
          {
            'route': 'Laboratories',
            'name': res['Homepage.Laboratories']
          },
          {
            'route': 'contact',
            'name': res['Homepage.Contact']
          }
        ];
      });
    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      // tslint:disable-next-line:max-line-length
      this.translate.get(['Homepage.AboutUs', 'Homepage.FacultyAdvisor', 'Homepage.DepartmentStructureStaff', 'Homepage.Laboratories', 'Homepage.Contact']).subscribe(
        res => {
          this.titles = [
            {
              'route': 'about-us',
              'name': res['Homepage.AboutUs']
            },
            {
              'route': 'facility-advisor',
              'name': res['Homepage.FacultyAdvisor']
            },
            {
              'route': 'department-structure-staff',
              'name': res['Homepage.DepartmentStructureStaff']
            },
            {
              'route': 'Laboratories',
              'name': res['Homepage.Laboratories']
            },
            {
              'route': 'contact',
              'name': res['Homepage.Contact']
            }
          ];
        }
      );
    });
    this.parentRoute = '/introduction';
    this.parentRouteName = 'Introduction';
    this.route.params.subscribe(params => {
      this.selectedTitle = params['title'];
      this.isFaculty = false;
      this.isLaboratories = false;
      switch (this.selectedTitle) {
        case 'about-us':
          this.selectedTitle = 'About us';
          this.articleService.getArticles(String(ArticleType.About)).subscribe(
            data => {
              this.article = data['content'][0];
              console.log(this.article);
            },
            err => {
              console.log(err);
            }
          );
          break;
        case 'facility-advisor':
          this.selectedTitle = 'Facility Advisor';
          this.isFaculty = true;

          break;
        case 'department-structure-staff':
          this.selectedTitle = 'Department Structure & Staff';
          this.articleService.getArticles(String(ArticleType.DepartmentStructure)).subscribe(
            data => {
              this.article = data['content'][0];
            },
            err => {
              console.log(err);
            }
          );
          break;
        case 'Laboratories':
          this.isLaboratories = true;
          this.laboratoryServices.getlaboratory().subscribe(data => {
            console.log(data);
            this.Laboratory = data['content'];
          }, error => {
            console.log(error);
          });
        break;
        case 'contact':
          this.selectedTitle = 'Contact';
          this.articleService.getArticles(String(ArticleType.Contact)).subscribe(
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
  }
}
