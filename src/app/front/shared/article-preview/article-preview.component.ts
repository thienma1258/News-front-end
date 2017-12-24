import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../shared/model/article';
import {ASSERT_IMAGES_URL} from '../../../app.component';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.css']
})
export class ArticlePreviewComponent implements OnInit {
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
    console.log(this.articleUrl);
    let type, specificType;
    switch (this.article.specificType) {
      case 30:
        type = 'research';
        specificType = 'research-news';
        break;
      case 31:
        type = 'research';
        specificType = 'newLaboratory';
        break;
      case 32:
        type = 'research';
        specificType = 'conferences-and-seminars';
        break;
      case 34:
        type = 'research';
        specificType = 'poster';
        break;
      case 40:
        type = 'news';
        specificType = 'department-news';
        break;
      case 41:
        type = 'news';
        specificType = 'course-news';
        break;
      case 42:
        type = 'news';
        specificType = 'event';
        break;
      case 43:
        type = 'news';
        specificType = 'school-leadership';
        break;
    }

    if (type && specificType) {
      this.articleUrl = type + '/' + specificType + '/' + this.article.id;
    }
  }

}
