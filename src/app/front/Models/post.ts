export class Post {
  images: string[];
  title: string;
  language: string;
  content: string;
  constructor(title: string, content: string, language: string, images?: string[]){
    this.title = title;
    this.content = content;
    this.language = language;
    this.images = images;
  }
}
