import { Component, OnInit } from '@angular/core';
import {Article} from '../../../front/shared/interface/article';
import {Router} from "@angular/router";

@Component({
  selector: 'posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.css']
})
export class PostersComponent implements OnInit {

  articles: Article[] = [
    {
      title: 'title1',
      imageUrls: ['./../../../../assets/images/001t.jpg'],
      previewContent: 'preview content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
      content: 'content 1',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title2',
      imageUrls: ['./../../../../assets/images/070.jpg'],
      previewContent: 'preview content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
      content: 'content 2',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title3',
      imageUrls: ['./../../../../assets/images/077.jpg'],
      previewContent: 'preview content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
      content: 'content 3',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title4',
      imageUrls: ['./../../../../assets/images/077.jpg'],
      previewContent: 'preview content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
      content: 'content 3',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title5',
      imageUrls: ['./../../../../assets/images/077.jpg'],
      previewContent: 'preview content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
      content: 'content 3',
      url: '',
      createdTime: 'Oct 28, 2017'
    },
    {
      title: 'title6',
      imageUrls: ['./../../../../assets/images/077.jpg'],
      previewContent: 'preview content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec ultrices nulla. Aliquam erat volutpat. Ut consequat eget purus quis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est in magna maximus dapibus vel et mi.',
      content: 'content 3',
      url: '',
      createdTime: 'Oct 28, 2017'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewArticle() {
    this.router.navigate(['/admin/research/addnew', {
      type: 'posters'
    }]);
  }
}
