import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/model/article';
import {ArticleService} from "../../shared/services/article.service";
import {ArticleType} from "../../shared/enum/article-type.enum";

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
    this.articleService.getArticle(String(ArticleType.About)).subscribe(
      data => {
        this.aboutArticle = data['content'];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticle(String(ArticleType.FacultyAdvisor)).subscribe(
      data => {
        this.facilityArticle = data['content'];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticle(String(ArticleType.DepartmentStructure)).subscribe(
      data => {
        this.departmentArticle = data['content'];
      },
      err => {
        console.log(err);
      }
    );
    this.articleService.getArticle(String(ArticleType.Contact)).subscribe(
      data => {
        this.contactArticle = data['content'];
      },
      err => {
        console.log(err);
      }
    );
  }

}
