import {Component, Input, OnInit} from '@angular/core';
import {EmitterService} from '../emitter.service';
import {ArticleService} from "../../../shared/services/article.service";

@Component({
  selector: 'preview-edit-box',
  templateUrl: './preview-edit-box.component.html',
  styleUrls: ['./preview-edit-box.component.css']
})
export class PreviewEditBoxComponent implements OnInit {
  @Input() displayType = 1;
  @Input() article: any;
  @Input() editLink = '/admin/research/done/';
  @Input() informationTitle: string;

  slideEmitter = EmitterService.get('SLIDE');
  informationEmitter = EmitterService.get('INFORMATION');

  researchNewsEmitter = EmitterService.get('RESEARCH-NEWS');

  constructor(private articleService: ArticleService) {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {

  }

  removeArticle() {
    if (confirm('Are you sure to remove this article ?')) {
      this.researchNewsEmitter.emit(this.article.id);
      this.articleService.removeArticle(this.article.id).subscribe(
        data => {

        },
        err => {
          console.log(err);
        }
      );
    }
  }

  editSlide() {
    this.slideEmitter.emit('edit/' + this.article.id);
  }

  deleteSlide() {
    this.slideEmitter.emit('delete/' + this.article.id);
  }

  editInformation() {
    this.informationEmitter.emit(this.article.id);
  }
}
