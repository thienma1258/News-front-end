import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {ArticleService} from '../../shared/services/article.service';
import {ArticleType} from '../../shared/enum/article-type.enum';
import {EmitterService} from '../shared/emitter.service';
import {Advisor} from '../../shared/model/advisor';
import {AdvisorService} from '../../shared/services/advisor.service';
import {AdvisorGroup} from '../../shared/enum/advisor-group.enum';

@Component({
  selector: 'introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  public aboutEmitter = EmitterService.get('ABOUT US');
  public facultyAdvisorEmitter = EmitterService.get('FACILITY & ADVISOR');
  public departmentEmitter = EmitterService.get('DEPARTMENT STRUCTURE & STAFF');
  public contactEmitter = EmitterService.get('CONTACT');

  public aboutEditMode = false;
  public departmentEditMode = false;
  public contactEditMode = false;

  public aboutArticle: Article;
  public departmentArticle: Article;
  public contactArticle: Article;

  public advisorGroup = AdvisorGroup;

  constructor(public articleService: ArticleService) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    this.aboutArticle = new Article();
    this.departmentArticle = new Article();
    this.contactArticle = new Article();

    this.articleService.getArticles(String(ArticleType.About)).subscribe(
      data => {
        this.aboutArticle = data['content'][0];
        console.log(this.aboutArticle);
        console.log(data['content'][0]);
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticles(String(ArticleType.DepartmentStructure)).subscribe(
      data => {
        this.departmentArticle = data['content'][0];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticles(String(ArticleType.Contact)).subscribe(
      data => {
        this.contactArticle = data['content'][0];
      },
      err => {
        console.log(err);
      }
    );

    this.aboutEmitter.subscribe(msg => {
      if (msg === 'edit') {
        this.aboutEditMode = true;
      } else if (msg === 'done') {
        console.log(this.aboutArticle);
        this.aboutArticleFinishEdit();
        this.aboutEditMode = false;
      } else {
        this.aboutEditMode = false;
      }
    });
    this.departmentEmitter.subscribe(msg => {
      if (msg === 'edit') {
        this.departmentEditMode = true;
      } else if (msg === 'done') {
        this.departmentArticleFinishEdit();
        this.departmentEditMode = false;
      } else {
        this.departmentEditMode = false;
      }
    });
    this.contactEmitter.subscribe(msg => {
      if (msg === 'edit') {
        this.contactEditMode = true;
      } else if (msg === 'done') {
        this.contactArticleFinishEdit();
        this.contactEditMode = false;
      } else {
        this.contactEditMode = false;
      }
    });
  }

  aboutArticleFinishEdit() {
    this.articleService.editArticle(this.aboutArticle).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }

  departmentArticleFinishEdit() {
    this.articleService.editArticle(this.departmentArticle).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }

  contactArticleFinishEdit() {
    this.articleService.editArticle(this.contactArticle).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }
}
