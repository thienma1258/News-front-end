import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../shared/model/article';
import {ASSERT_IMAGES_URL} from '../../../app.component';

@Component({
  selector: 'article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {
  @Input() article: Article;
  @Input() showTitle = false;
  @Input() showPreviewContent = false;
  @Input() showCreatedTime = false;

  constructor() {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
  }

}
