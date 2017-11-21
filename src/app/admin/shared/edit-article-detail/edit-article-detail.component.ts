import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'edit-article-detail',
  templateUrl: './edit-article-detail.component.html',
  styleUrls: ['./edit-article-detail.component.css']
})
export class EditArticleDetailComponent implements OnInit {
  articleId: number;
  articleType: string;
  isAddNew = false;
  editorLanguage = 'English';
  editorOptions = {
    heightMin: 600,
    heightMax: 600
  };
  editorContent = 'My Document\'s Title';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleId = params['id'];
      this.articleType = params['type'];
      if (this.articleId === null || this.articleId === undefined) {
        this.isAddNew = true;
      }
    });
  }

  finishEdit() {
    console.log(this.editorContent);
  }

  switchLanguage() {

  }
}
