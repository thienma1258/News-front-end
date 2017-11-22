import {Component, Input, OnInit} from '@angular/core';
import {FacebookService, InitParams} from 'ngx-facebook';
import {Article} from '../../../shared/interface/article';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {
  @Input() article: Article;

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '1291648807589933',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }


  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
  }

}
