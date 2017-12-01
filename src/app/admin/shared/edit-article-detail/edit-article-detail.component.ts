import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ArticleService} from '../../../shared/services/article.service';
import {ArticleSize} from '../../../shared/enum/article-size.enum';
import {EventService} from '../../../shared/services/event.service';
import {Article} from '../../../shared/model/article';


@Component({
  selector: 'edit-article-detail',
  templateUrl: './edit-article-detail.component.html',
  styleUrls: ['./edit-article-detail.component.css']
})

export class EditArticleDetailComponent implements OnInit {
  @Input() article: Article;
  @Input() showTitle = true;
  isShowDoneButton = false;
  isEditingEvent = false;

  articleId: string;
  articleType: string;
  articleSize = ArticleSize;
  isAddNew = false;

  editorLanguage = '中文';
  editorLocale = 'en';

  editorOptions = {
    heightMin: 600,
    heightMax: 600
  };

  constructor(private route: ActivatedRoute, private location: Location,
              private articleService: ArticleService, private eventService: EventService) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
    if (this.article === undefined) {
      this.isShowDoneButton = true;
      this.route.params.subscribe(params => {
        this.articleId = params['id'];
        if (this.articleId === null || this.articleId === undefined) {
          this.isAddNew = true;
        }
        this.articleService.getArticlesById(this.articleId).subscribe(
          data => {
            this.article = data['content'];
          },
          err => {
            console.log(err);
          }
        );
      });
    }
  }

  finishEdit() {
    this.articleService.editArticle(this.article).subscribe(
      data => {

      },
      err => {
        console.log(err);
      }
    );
    this.location.back();
  }

  switchEditorLanguage() {
    this.editorLanguage = this.editorLanguage === 'English' ? '中文' : 'English';
    this.editorLocale = this.editorLocale === 'en' ? 'zh-tw' : 'en';
  }
}
