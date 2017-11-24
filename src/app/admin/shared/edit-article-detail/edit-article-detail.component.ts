import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ArticleService} from '../../../shared/services/article.service';
import {Article} from '../../../shared/model/article';


@Component({
  selector: 'edit-article-detail',
  templateUrl: './edit-article-detail.component.html',
  styleUrls: ['./edit-article-detail.component.css']
})
export class EditArticleDetailComponent implements OnInit {
  articleId: number;
  article: Article;
  articleTitle: string;
  articleType: string;
  isAddNew = false;
  editorLanguage = 'English';
  editorOptions = {
    heightMin: 600,
    heightMax: 600
  };
  articleContent = '';

  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleId = params['id'];
      this.articleType = params['type'];
      if (this.articleId === null || this.articleId === undefined) {
        this.isAddNew = true;
      }
      this.article = this.articleService.getArticle(String(this.articleId));
      if (this.Locale === 'en') {
        this.articleContent = this.article.englishContent;
        this.articleTitle = this.article.englishTitle;
      } else {
        this.articleContent = this.article.chineseContent;
        this.articleTitle = this.article.chineseTitle;
      }
    });
  }

  finishEdit() {
    console.log(this.articleContent);
    this.location.back();
  }

  switchLanguage() {

  }
}
