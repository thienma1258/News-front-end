import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../shared/interface/article';
import {EmitterService} from "../emitter.service";

@Component({
  selector: 'preview-edit-box',
  templateUrl: './preview-edit-box.component.html',
  styleUrls: ['./preview-edit-box.component.css']
})
export class PreviewEditBoxComponent implements OnInit {
  @Input() displayType = 1;
  @Input() article: Article;
  @Input() editLink = '/admin/research/addnew/';

  slideEmitter = EmitterService.get('SLIDE');

  constructor() {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {

  }

  edit() {
    this.slideEmitter.emit('edit/' + this.article.id);
  }

  delete() {
    this.slideEmitter.emit('delete/' + this.article.id);
  }
}
