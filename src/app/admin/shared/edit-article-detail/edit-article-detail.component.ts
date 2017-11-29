import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ArticleService} from '../../../shared/services/article.service';
import {Article} from '../../../shared/model/article';
import {ArticleType} from '../../../shared/enum/article-type.enum';
import {ArticleSize} from "../../../shared/enum/article-size.enum";


@Component({
  selector: 'edit-article-detail',
  templateUrl: './edit-article-detail.component.html',
  styleUrls: ['./edit-article-detail.component.css']
})
export class EditArticleDetailComponent implements OnInit {
  @Input() article: Article;
  isShowDoneButton = false;

  articleId: number;
  articleType: string;
  articleSize = ArticleSize;
  isAddNew = false;
  editorLanguage = 'English';
  editorLocale = 'en';

  editorOptions = {
    heightMin: 600,
    heightMax: 600
  };

  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    if (this.article === undefined) {
      this.isShowDoneButton = true;
      this.article = new Article();
      this.route.params.subscribe(params => {
        this.articleId = params['id'];
        this.articleType = params['type'];
        if (this.articleId === null || this.articleId === undefined) {
          this.isAddNew = true;
        }
        this.articleService.getArticles(String(ArticleType.FacultyAdvisor)).subscribe(
          data => {
            this.article = data['content'][0];
          },
          err => {
            console.log(err);
          }
        );
      });
    }
  }

  finishEdit() {
    this.location.back();
  }

  switchEditorLanguage() {
    this.editorLanguage = this.editorLanguage === 'English' ? '中文' : 'English';
    this.editorLocale = this.editorLocale === 'en' ? 'zh-tw' : 'en';
  }
}
