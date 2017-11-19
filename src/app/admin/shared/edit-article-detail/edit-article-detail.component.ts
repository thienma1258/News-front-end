import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'edit-article-detail',
  templateUrl: './edit-article-detail.component.html',
  styleUrls: ['./edit-article-detail.component.css']
})
export class EditArticleDetailComponent implements OnInit {
  articleId: number;
  language = 'English';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleId = params['id'];
    });
  }

}
