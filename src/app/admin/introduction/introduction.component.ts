import { Component, OnInit } from '@angular/core';
import {Article} from '../../front/shared/interface/article';

@Component({
  selector: 'introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  aboutArticle: Article = {
    title: 'title1',
    imageUrls: ['./../../../../assets/images/001t.jpg'],
    previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    content: 'content 1',
    url: '',
    createdTime: 'Oct 28, 2017'
  };

  facilityArticle: Article = {
    title: 'title1',
    imageUrls: ['./../../../../assets/images/001t.jpg'],
    previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    content: 'content 1',
    url: '',
    createdTime: 'Oct 28, 2017'
  };

  departmentArticle: Article = {
    title: 'title1',
    imageUrls: ['./../../../../assets/images/001t.jpg'],
    previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    content: 'content 1',
    url: '',
    createdTime: 'Oct 28, 2017'
  };

  contactArticle: Article = {
    title: 'title1',
    imageUrls: ['./../../../../assets/images/001t.jpg'],
    previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
    content: 'content 1',
    url: '',
    createdTime: 'Oct 28, 2017'
  };

  constructor() { }

  ngOnInit() {
  }

}
