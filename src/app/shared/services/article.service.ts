import {Injectable} from '@angular/core';
import {Article} from '../model/Article';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthService} from '../../admin/shared/auth.service';

@Injectable()
export class ArticleService {

  private article: Article;

  private getArticleUrl = '/slide/get?';
  private editArticleUrl = '/slide/edit';
  private searchArticleUrl = '/slide/search/{keyword}';

  private getSlideUrl = '/slide/get';

  constructor(private http: HttpClient, private authService: AuthService) {
    // this.articles = [
    //   {
    //     id: '1',
    //     englishTitle: 'title1',
    //     chineseTitle: '中文title1',
    //     imageUrls: ['./assets/images/001t.jpg'],
    //     englishContent: 'english content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     chineseContent: '中文 content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     size: ArticleSize.Small,
    //     createdTime: 'Oct 28, 2017',
    //   },
    //   {
    //     id: '2',
    //     englishTitle: 'title2',
    //     chineseTitle: '中文title2',
    //     imageUrls: ['./assets/images/001.jpg'],
    //     englishContent: 'english content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     chineseContent: '中文 content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     size: ArticleSize.Small,
    //     createdTime: 'Oct 28, 2017',
    //   },
    //   {
    //     id: '3',
    //     englishTitle: 'title3',
    //     chineseTitle: '中文title3',
    //     imageUrls: ['./assets/images/077.jpg'],
    //     englishContent: 'english content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     chineseContent: '中文 content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     size: ArticleSize.Small,
    //     createdTime: 'Oct 28, 2017',
    //   },
    //   {
    //     id: '4',
    //     englishTitle: 'About Us',
    //     chineseTitle: '中文title',
    //     imageUrls: ['./assets/images/001t.jpg'],
    //     englishContent: 'english content 4 about us Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     chineseContent: '中文 content 4 about us Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     size: ArticleSize.Small,
    //     createdTime: 'Oct 28, 2017',
    //   },
    //   {
    //     id: '5',
    //     englishTitle: 'Admissions',
    //     chineseTitle: '中文title',
    //     imageUrls: ['./assets/images/001.jpg'],
    //     englishContent: 'english content 5 Admissions Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     chineseContent: '中文 content 5 Admissions Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     size: ArticleSize.Small,
    //     createdTime: 'Oct 28, 2017',
    //   },
    //   {
    //     id: '6',
    //     englishTitle: 'Academics',
    //     chineseTitle: '中文title',
    //     imageUrls: ['./assets/images/077.jpg'],
    //     englishContent: 'english content 6 Academics Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     chineseContent: '中文 content 6 Academics Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     size: ArticleSize.Small,
    //     createdTime: 'Oct 28, 2017',
    //   },
    //   {
    //     id: '7',
    //     englishTitle: 'Research',
    //     chineseTitle: '中文title',
    //     imageUrls: ['./assets/images/001t.jpg'],
    //     englishContent: 'english content 7 Research Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     chineseContent: '中文 content 7 Research Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     size: ArticleSize.Small,
    //     createdTime: 'Oct 28, 2017',
    //   },
    //   {
    //     id: '8',
    //     englishTitle: 'Student Life',
    //     chineseTitle: '中文title',
    //     imageUrls: ['./assets/images/001.jpg'],
    //     englishContent: 'english content 8 Student Life Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     chineseContent: '中文 content 8 Student Life Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    //     size: ArticleSize.Small,
    //     createdTime: 'Oct 28, 2017',
    //   },
    //   {
    //     id: '9',
    //     englishTitle: 'title9',
    //     chineseTitle: '中文title',
    //     imageUrls: ['./assets/images/077.jpg'],
    //     englishContent: '\'9 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante\\n\' +\n' +
    //     '    \'  dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce\\n\' +\n' +
    //     '    \'  nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti\\n\' +\n' +
    //     '    \'  sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed\\n\' +\n' +
    //     '    \'  dignissim lacinia nunc.\\n\' +\n' +
    //     '    \'  e\\n\' +\n' +
    //     '    \'  Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis\\n\' +\n' +
    //     '    \'  tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,\\n\' +\n' +
    //     '    \'  luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper\\n\' +\n' +
    //     '    \'  vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora\\n\' +\n' +
    //     '    \'  torquent per conubia nostra, per inceptos himenaeos. Nam nec ante.\\n\' +\n' +
    //     '    \'\\n\' +\n' +
    //     '    \'  Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla\\n\' +\n' +
    //     '    \'  facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien.\\n\' +\n' +
    //     '    \'  Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus\\n\' +\n' +
    //     '    \'  luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget\\n\' +\n' +
    //     '    \'  diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia\\n\' +\n' +
    //     '    \'  molestie dui.\\n\' +\n' +
    //     '    \'\\n\' +\n' +
    //     '    \'  Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede\\n\' +\n' +
    //     '    \'  facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada\\n\' +\n' +
    //     '    \'  tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla\\n\' +\n' +
    //     '    \'  facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam.\\n\' +\n' +
    //     '    \'\\n\' +\n' +
    //     '    \'  Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero\\n\' +\n' +
    //     '    \'  eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut\\n\' +\n' +
    //     '    \'  orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede\\n\' +\n' +
    //     '    \'  suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci,\\n\' +\n' +
    //     '    \'  aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet\\n\' +\n' +
    //     '    \'  mollis lectus. Vivamus consectetuer risus et tortor.\',',
    //     chineseContent: '中文 \'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante\\n\' +\n' +
    //     '    \'  dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce\\n\' +\n' +
    //     '    \'  nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti\\n\' +\n' +
    //     '    \'  sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed\\n\' +\n' +
    //     '    \'  dignissim lacinia nunc.\\n\' +\n' +
    //     '    \'  e\\n\' +\n' +
    //     '    \'  Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis\\n\' +\n' +
    //     '    \'  tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,\\n\' +\n' +
    //     '    \'  luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper\\n\' +\n' +
    //     '    \'  vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora\\n\' +\n' +
    //     '    \'  torquent per conubia nostra, per inceptos himenaeos. Nam nec ante.\\n\' +\n' +
    //     '    \'\\n\' +\n' +
    //     '    \'  Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla\\n\' +\n' +
    //     '    \'  facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien.\\n\' +\n' +
    //     '    \'  Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus\\n\' +\n' +
    //     '    \'  luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget\\n\' +\n' +
    //     '    \'  diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia\\n\' +\n' +
    //     '    \'  molestie dui.\\n\' +\n' +
    //     '    \'\\n\' +\n' +
    //     '    \'  Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede\\n\' +\n' +
    //     '    \'  facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada\\n\' +\n' +
    //     '    \'  tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla\\n\' +\n' +
    //     '    \'  facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam.\\n\' +\n' +
    //     '    \'\\n\' +\n' +
    //     '    \'  Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero\\n\' +\n' +
    //     '    \'  eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut\\n\' +\n' +
    //     '    \'  orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede\\n\' +\n' +
    //     '    \'  suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci,\\n\' +\n' +
    //     '    \'  aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet\\n\' +\n' +
    //     '    \'  mollis lectus. Vivamus consectetuer risus et tortor.\',',
    //     size: ArticleSize.Small,
    //     createdTime: 'Oct 28, 2017',
    //   }
    // ];
    //

  }

  getArticles(type: string) {
    const params = new HttpParams().set('type', type);
    const url = this.authService.apiUrl + this.getArticleUrl;

    return this.http.get(url, {
      params: params
    });
  }

  searchArticle(keyword: string) {
    const url = this.authService.apiUrl + this.searchArticleUrl;
    return this.http.get(url);
  }

  editArticle(article: Article) {
    const url = this.authService.apiUrl + this.editArticleUrl;
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    console.log(article);
    return this.http.put(url, article, options);
  }

  getSlides() {
    const url = this.authService.apiUrl + this.getSlideUrl;
    return this.http.get(url);
  }
}
