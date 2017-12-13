import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../shared/model/article';
import {ASSERT_IMAGES_URL} from '../../../app.component';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {
  assertImagesUrl = ASSERT_IMAGES_URL;
  @Input() article: Article;
  @Input() displayType: number;
  @Input() showTitle = false;
  @Input() showPreviewImage = false;
  @Input() showPreviewContent = false;
  @Input() showCreatedTime = false;
  @Input() articleUrl = '';

  get LanguageLocale() {
    return localStorage.getItem('locale');
  }

  constructor() {
    console.log(this.articleUrl);
  }

  ngOnInit() {
  }

}
