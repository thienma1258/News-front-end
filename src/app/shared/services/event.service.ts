import {Injectable} from '@angular/core';
import {Event} from '../model/Event';
import {ArticleSize} from "../enum/article-size.enum";

@Injectable()
export class EventService {

  private events: Event[] = [
    {
      'article': {
        id: '10',
        englishTitle: 'title1',
        chineseTitle: '中文title',
        imageUrls: ['./assets/images/001.jpg'],
        englishContent: 'english content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
        chineseContent: '中文 content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
        size: ArticleSize.Small,
        createdTime: 'Oct 28, 2017',
      },
      'eventDate': 'Nov 11'
    },
    {
      'article': {
        id: '11',
        englishTitle: 'title1',
        chineseTitle: '中文title',
        imageUrls: ['./assets/images/001.jpg'],
        englishContent: 'english content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
        chineseContent: '中文 content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
        size: ArticleSize.Small,
        createdTime: 'Oct 28, 2017',
      },
      'eventDate': 'Nov 11'
    },
    {
      'article': {
        id: '12',
        englishTitle: 'title1',
        chineseTitle: '中文title',
        imageUrls: ['./assets/images/001.jpg'],
        englishContent: 'english content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
        chineseContent: '中文 content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
        size: ArticleSize.Small,
        createdTime: 'Oct 28, 2017',
      },
      'eventDate': 'Nov 11'
    },
    {
      'article': {
        id: '13',
        englishTitle: 'title1',
        chineseTitle: '中文title',
        imageUrls: ['./assets/images/001.jpg'],
        englishContent: 'english content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
        chineseContent: '中文 content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
        size: ArticleSize.Small,
        createdTime: 'Oct 28, 2017',
      },
      'eventDate': 'Nov 11'
    }
  ];

  constructor() {
  }

  getEvent(id: string): Event {
    return this.events[+id];
  }
}
