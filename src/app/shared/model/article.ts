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
  lastUpdated: string;
  specificType: number;
  type: number;
  url: string;
  constructor() {
    this.id = '';
    this.englishTitle = '';
    this.chineseTitle = '';
    this.size = ArticleSize.Small;
    this.previewImageUrl = '';
    this.englishContent = '';
    this.chineseContent = '';
    this.createdTime = '';
    this.type = 0;
    this.specificType = 0;
    this.url = '';
  }
}
