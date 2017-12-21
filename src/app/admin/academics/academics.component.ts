import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {ArticleService} from '../../shared/services/article.service';
import {ArticleType} from '../../shared/enum/article-type.enum';
import {EmitterService} from '../shared/emitter.service';

@Component({
  selector: 'academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent implements OnInit {
  public academicEmitter = EmitterService.get('ACADEMIC INFORMATION');
  public studentEmitter = EmitterService.get('STUDENT GRADUATE AND UNGRADUATE');
  public teachingEmitter = EmitterService.get('TEACHING');
  public degreeEmitter = EmitterService.get('DEGREE REQUIREMENT');
  public admissionEmitter = EmitterService.get('ADMISSION');
  public guidelineEmitter = EmitterService.get('GUIDELINE');

  public academicEditMode = false;
  public studentEditMode = false;
  public teachingEditMode = false;
  public degreeEditMode = false;
  public admissionEditMode = false;
  public guidelineEditMode = false;

  public academicArticle: Article;
  public studentArticle: Article;
  public teachingArticle: Article;
  public degreeArticle: Article;
  public admissionArticle: Article;
  public guideLineArticle: Article;

  constructor(public articleService: ArticleService) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    this.academicArticle = new Article();
    this.studentArticle = new Article();
    this.teachingArticle = new Article();
    this.degreeArticle = new Article();
    this.admissionArticle = new Article();
    this.guideLineArticle = new Article();

    this.articleService.getArticles(String(ArticleType.AcademicInfo)).subscribe(
      data => {
        this.academicArticle = data['content'][0];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticles(String(ArticleType.StudentGraduate)).subscribe(
      data => {
        this.studentArticle = data['content'][0];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticles(String(ArticleType.Teaching)).subscribe(
      data => {
        this.teachingArticle = data['content'][0];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticles(String(ArticleType.DegreeRequirement)).subscribe(
      data => {
        this.degreeArticle = data['content'][0];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticles(String(ArticleType.AdmissionInfo)).subscribe(
      data => {
        this.admissionArticle = data['content'][0];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticles(String(ArticleType.Guideline)).subscribe(
      data => {
        this.guideLineArticle = data['content'][0];
      },
      err => {
        console.log(err);
      }
    );
    this.academicEmitter.subscribe(msg => {
      if (msg === 'edit') {
        this.academicEditMode = true;
      } else if (msg === 'done') {
        this.academicArticleFinishEdit();
        this.academicEditMode = false;
      } else {
        this.academicEditMode = false;
      }
    });
    this.studentEmitter.subscribe(msg => {
      if (msg === 'edit') {
        this.studentEditMode = true;
      } else if (msg === 'done') {
        this.studentArticleFinishEdit();
        this.studentEditMode = false;
      } else {
        this.studentEditMode = false;
      }
    });
    this.teachingEmitter.subscribe(msg => {
      if (msg === 'edit') {
        this.teachingEditMode = true;
      } else if (msg === 'done') {
        this.teachingArticleFinishEdit();
        this.teachingEditMode = false;
      } else {
        this.teachingEditMode = false;
      }
    });
    this.degreeEmitter.subscribe(msg => {
      if (msg === 'edit') {
        this.degreeEditMode = true;
      } else if (msg === 'done') {
        this.degreeArticleFinishEdit();
        this.degreeEditMode = false;
      } else {
        this.degreeEditMode = false;
      }
    });
    this.admissionEmitter.subscribe(msg => {
      if (msg === 'edit') {
        this.admissionEditMode = true;
      } else if (msg === 'done') {
        this.admissionArticleFinishEdit();
        this.admissionEditMode = false;
      } else {
        this.admissionEditMode = false;
      }
    });
    this.guidelineEmitter.subscribe(msg => {
      if (msg === 'edit') {
        this.guidelineEditMode = true;
      } else if (msg === 'done') {
        this.guidelineArticleFinishEdit();
        this.guidelineEditMode = false;
      } else {
        this.guidelineEditMode = false;
      }
    });
  }


  academicArticleFinishEdit() {
    this.articleService.editArticle(this.academicArticle).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }

  studentArticleFinishEdit() {
    this.articleService.editArticle(this.studentArticle).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }

  teachingArticleFinishEdit() {
    this.articleService.editArticle(this.teachingArticle).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }

  degreeArticleFinishEdit() {
    this.articleService.editArticle(this.degreeArticle).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }

  admissionArticleFinishEdit() {
    this.articleService.editArticle(this.admissionArticle).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }

  guidelineArticleFinishEdit() {
    this.articleService.editArticle(this.guideLineArticle).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
  }
}
