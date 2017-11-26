import { Component, OnInit } from '@angular/core';
import {Article} from '../../shared/model/article';
import {ArticleService} from "../../shared/services/article.service";
import {ArticleType} from "../../shared/enum/article-type.enum";

@Component({
  selector: 'academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent implements OnInit {
  private academicArticle: Article;
  private studentArticle: Article;
  private teachingArticle: Article;
  private degreeArticle: Article;

  constructor(private articleService: ArticleService) { }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    this.articleService.getArticle(String(ArticleType.AcademicInfo)).subscribe(
      data => {
        this.academicArticle = data['content'];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticle(String(ArticleType.StudentGraduate)).subscribe(
      data => {
        this.studentArticle = data['content'];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticle(String(ArticleType.Teaching)).subscribe(
      data => {
        this.teachingArticle = data['content'];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticle(String(ArticleType.DegreeRequirement)).subscribe(
      data => {
        this.degreeArticle = data['content'];
      },
      err => {
        console.log(err);
      }
    );
  }

}
