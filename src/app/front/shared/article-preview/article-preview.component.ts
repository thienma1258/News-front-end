import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../interface/article';
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

  constructor() {
  }

  ngOnInit() {
  }

}