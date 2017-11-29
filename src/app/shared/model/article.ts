import {ArticleSize} from '../enum/article-size.enum';

export class Article {
  id: string;
  englishTitle: string;
  chineseTitle: string;
  size: ArticleSize;
  previewImageUrl: string;
  englishContent?: string;
  chineseContent?: string;
  createdTime: string;

  constructor() {
    this.id = '';
    this.englishTitle = '';
    this.chineseTitle = '';
    this.size = ArticleSize.Small;
    this.previewImageUrl = '';
    this.englishContent = '';
    this.chineseContent = '';
    this.createdTime = '';
  }
}
