import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {ArticleService} from '../../shared/services/article.service';
import {ArticleType} from '../../shared/enum/article-type.enum';
import {EmitterService} from '../shared/emitter.service';

@Component({
  selector: 'introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  private aboutEmitter = EmitterService.get('ABOUT US');
  private facultyAdvisorEmitter = EmitterService.get('FACILITY & ADVISOR');
  private departmentEmitter = EmitterService.get('DEPARTMENT STRUCTURE & STAFF');
  private contactEmitter = EmitterService.get('CONTACT');

  private aboutEditMode = false;
  private facultyAdvisorEditMode = false;
  private departmentEditMode = false;
  private contactEditMode = false;

  private aboutArticle: Article;
  private facilityArticle: Article;
  private departmentArticle: Article;
  private contactArticle: Article;

  constructor(private articleService: ArticleService) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    this.aboutArticle = new Article();
    this.facilityArticle = new Article();
    this.departmentArticle = new Article();
    this.contactArticle = new Article();

    this.articleService.getArticles(String(ArticleType.About)).subscribe(
      data => {
        this.aboutArticle = data['content'][0];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticles(String(ArticleType.FacultyAdvisor)).subscribe(
      data => {
        this.facilityArticle = data['content'][0];
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
    this.facultyAdvisorEmitter.subscribe(msg => {
      if (msg === 'edit') {
        this.facultyAdvisorEditMode = true;
      } else if (msg === 'done') {
        this.facultyAdvisorArticleFinishEdit();
        this.facultyAdvisorEditMode = false;
      } else {
        this.facultyAdvisorEditMode = false;
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

  facultyAdvisorArticleFinishEdit() {
    this.articleService.editArticle(this.facilityArticle).subscribe(
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
