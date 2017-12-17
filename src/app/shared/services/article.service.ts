import {Injectable} from '@angular/core';
import {Article} from '../model/Article';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthService} from '../../admin/shared/auth.service';
import {Slide} from '../model/slide';

@Injectable()
export class ArticleService {

  private numberOfDisplayArticle = 4;

  private getArticleUrl;
  private getArticlesUrl;
  private editArticleUrl;
  private removeArticleUrl;
  private searchArticleUrl;

  private getSlideUrl;
  private addSlideUrl;
  private editSlideUrl;
  private removeSlideUrl;

  private getLatestArticleUrl;
  private addArticlesUrl;
  public uploadImageUrl;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.getArticleUrl = this.authService.apiUrl + '/article/get/';
    this.getArticlesUrl = this.authService.apiUrl + '/article/get?';
    this.editArticleUrl = this.authService.apiUrl + '/article/edit';
    this.removeArticleUrl = this.authService.apiUrl + '/article/remove';
    this.searchArticleUrl = this.authService.apiUrl + '/article/search/';
    this.addArticlesUrl = this.authService.apiUrl + '/article/add';
    this.getSlideUrl = this.authService.apiUrl + '/slide/get';
    this.addSlideUrl = this.authService.apiUrl + '/slide/add';
    this.editSlideUrl = this.authService.apiUrl + '/slide/edit';
    this.removeSlideUrl = this.authService.apiUrl + '/slide/remove';

    this.getLatestArticleUrl = this.authService.apiUrl + '/article/get-recent/';

    this.uploadImageUrl = this.authService.apiUrl + '/image/upload';
  }

  getArticlesById(id: string) {
    const url = this.getArticleUrl + id;
    return this.http.get(url);
  }

  getArticles(type: string) {
    const params = new HttpParams().set('type', type);
    const url = this.getArticlesUrl;

    return this.http.get(url, {
      params: params
    });
  }

  searchArticle(keyword: string) {
    const url = this.searchArticleUrl;
    return this.http.get(url);
  }

  editArticle(article: Article) {
    const url = this.editArticleUrl;
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    return this.http.put(url, article, options);
  }
  // tslint:disable-next-line:one-line
  addArticle(article: Article){
    const url = this.addArticlesUrl;
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    return this.http.post(url, article, options);
  }

  removeArticle(id: string) {
    const url = this.removeArticleUrl;
    const data: FormData = new FormData();
    data.append('id', id);
    const options = {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    console.log(id);
    return this.http.post(url, data, options);
  }

  getSlides() {
    const url = this.getSlideUrl;
    return this.http.get(url);
  }

  addSlide(slide: Slide) {
    const url = this.addSlideUrl;
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    return this.http.post(url, slide, options);
  }

  editSlide(slide: Slide) {
    const url = this.editSlideUrl;
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    return this.http.put(url, slide, options);
  }

  removeSlide(slideId: string) {
    const url = this.removeSlideUrl;

    const data: FormData = new FormData();
    data.append('slideId', slideId);

    const options = {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    return this.http.post(url, data, options);
  }

  getLatestNews() {
    const url = this.getLatestArticleUrl + this.numberOfDisplayArticle;
    return this.http.get(url);
  }
}
