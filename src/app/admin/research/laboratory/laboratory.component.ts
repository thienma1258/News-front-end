import { Component, OnInit } from '@angular/core';
import {Article} from '../../../shared/model/article';
import {Router} from "@angular/router";
import {ArticleService} from '../../../shared/services/article.service';
import {ArticleType} from "../../../shared/enum/article-type.enum";

@Component({
  selector: 'laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent implements OnInit {
  private articles: Article[] = [];

  constructor(private router: Router, private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles(String(ArticleType.Laboratory)).subscribe(
      data => {
        this.articles = data['content'];
      },
      err => {
        console.log(err);
      }
    );
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  addNewArticle() {
    this.router.navigate(['/admin/research/addnew', {
      type: 'laboratory'
    }]);
  }
}
