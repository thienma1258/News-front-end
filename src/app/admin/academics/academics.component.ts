import { Component, OnInit } from '@angular/core';
import {Article} from '../../shared/model/article';
import {ArticleService} from "../../shared/services/article.service";

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
    this.academicArticle = this.articleService.getArticle('1');
    this.studentArticle = this.articleService.getArticle('2');
    this.teachingArticle = this.articleService.getArticle('3');
    this.degreeArticle = this.articleService.getArticle('4');
  }

}
