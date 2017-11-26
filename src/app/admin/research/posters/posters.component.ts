import { Component, OnInit } from '@angular/core';
import {Article} from '../../../shared/model/article';
import {Router} from "@angular/router";
import {ArticleService} from '../../../shared/services/article.service';
import {ArticleType} from "../../../shared/enum/article-type.enum";

@Component({
  selector: 'posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})
export class PostersComponent implements OnInit {
  private articles: Article[] = [];

  constructor(private router: Router, private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticle(String(ArticleType.Poster)).subscribe(
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
      type: 'posters'
    }]);
  }
}
