import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/interface/article';
import {ArticleService} from "../../shared/services/article.service";

@Component({
  selector: 'introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

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
    this.aboutArticle = this.articleService.getArticle('1');
    this.facilityArticle = this.articleService.getArticle('2');
    this.departmentArticle = this.articleService.getArticle('3');
    this.contactArticle = this.articleService.getArticle('4');
  }

}
