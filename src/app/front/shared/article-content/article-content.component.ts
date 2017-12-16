import {Component, Input, OnInit} from '@angular/core';
import {FacebookService, InitParams} from 'ngx-facebook';
import {Article} from '../../../shared/model/article';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {
  @Input() article: Article;
  public currentUrl: string;

  constructor(private router: Router, private fb: FacebookService) {
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
    this.currentUrl = this.router.url;
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open(this.currentUrl, '_blank');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
      <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
         </style>
        </head>
    <body onload="window.print();">${printContents}</body>
      </html>\`
    `);
    popupWin.document.close();
  }

}
