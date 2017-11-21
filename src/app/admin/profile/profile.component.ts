import { Component, OnInit } from '@angular/core';
import {Article} from "../../shared/interface/article";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  contactName = 'National Chi Nan University - Department of Electrical Engineering';
  contactAddress = '(545) Daxue Rd, Puli Township, Nantou Country 545, Taiwan (R.O.C)';
  contactPhones: string[] = [
    '(049) 2910960-4101',
    '(049) 2910960-4102',
    '(049) 2910960-4103'
  ];
  contactFax = '(049) 2917810';
  link = [
    {
      'text': 'NCNU Home',
      'url': 'http://en.ncnu.edu.tw'
    },
    {
      'text': 'NCNU Email Login',
      'url': 'http://en.ncnu.edu.tw'
    },
    {
      'text': 'NCNU Student Web',
      'url': 'http://en.ncnu.edu.tw'
    },
    {
      'text': 'NCNU Fanpage Facebook',
      'url': 'http://en.ncnu.edu.tw'
    },
    {
      'text': 'Alumni',
      'url': 'http://en.ncnu.edu.tw'
    }
  ];

  slides: Article[] = [
    {
      title: 'title1',
      imageUrls: ['001t.jpg'],
      previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
      content: 'content 1',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title2',
      imageUrls: ['070.jpg'],
      previewContent: 'preview content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
      content: 'content 2',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title3',
      imageUrls: ['077.jpg'],
      previewContent: 'preview content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
      content: 'content 3',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
