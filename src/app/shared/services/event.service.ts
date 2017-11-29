import {Injectable} from '@angular/core';
import {Event} from '../model/Event';
import {ArticleSize} from '../enum/article-size.enum';
import {AuthService} from '../../admin/shared/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EventService {

  private numberOfDispalyEvents = 4;

  private getUpcomingEventUrl = '/event/get-recent/';

  // private events: Event[] = [
  //   {
  //     'article': {
  //       id: '10',
  //       englishTitle: 'title1',
  //       chineseTitle: '中文title',
  //       imageUrls: ['./assets/images/001.jpg'],
  //       englishContent: 'english content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
  //       chineseContent: '中文 content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
  //       size: ArticleSize.Small,
  //       createdTime: 'Oct 28, 2017',
  //     },
  //     'beginDate': 'Nov 11'
  //   },
  //   {
  //     'article': {
  //       id: '11',
  //       englishTitle: 'title1',
  //       chineseTitle: '中文title',
  //       imageUrls: ['./assets/images/001.jpg'],
  //       englishContent: 'english content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
  //       chineseContent: '中文 content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
  //       size: ArticleSize.Small,
  //       createdTime: 'Oct 28, 2017',
  //     },
  //     'beginDate': 'Nov 11'
  //   },
  //   {
  //     'article': {
  //       id: '12',
  //       englishTitle: 'title1',
  //       chineseTitle: '中文title',
  //       imageUrls: ['./assets/images/001.jpg'],
  //       englishContent: 'english content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
  //       chineseContent: '中文 content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
  //       size: ArticleSize.Small,
  //       createdTime: 'Oct 28, 2017',
  //     },
  //     'beginDate': 'Nov 11'
  //   },
  //   {
  //     'article': {
  //       id: '13',
  //       englishTitle: 'title1',
  //       chineseTitle: '中文title',
  //       imageUrls: ['./assets/images/001.jpg'],
  //       englishContent: 'english content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
  //       chineseContent: '中文 content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
  //       size: ArticleSize.Small,
  //       createdTime: 'Oct 28, 2017',
  //     },
  //     'beginDate': 'Nov 11'
  //   }
  // ];

  constructor(private authService: AuthService, private http: HttpClient) {
  }

  getEvent(id: string){
    // return this.events[+id];
  }

  getUpcomingEvent() {
    const url = this.authService.apiUrl + this.getUpcomingEventUrl + this.numberOfDispalyEvents;
    return this.http.get(url);
  }
}
