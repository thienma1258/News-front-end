import {ArticleSize} from '../enum/article-size.enum';

export class Article {
  id: string;
  englishTitle: string;
  chineseTitle: string;
  size: ArticleSize;
  imageUrls?: string[];
  englishContent?: string;
  chineseContent?: string;
  createdTime: string;
}
