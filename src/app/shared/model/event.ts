import {Article} from './article';
import {ArticleSize} from '../enum/article-size.enum';

export class Event {
  id: string;
  englishTitle: string;
  chineseTitle: string;
  size: ArticleSize;
  previewImageUrl: string;
  englishContent?: string;
  chineseContent?: string;
  createdTime: string;
  beginDate: string;
  lastUpdatedTime: string;
}
