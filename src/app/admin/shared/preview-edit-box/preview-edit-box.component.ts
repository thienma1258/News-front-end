import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../shared/model/article';
import {EmitterService} from "../emitter.service";

@Component({
  selector: 'preview-edit-box',
  templateUrl: './preview-edit-box.component.html',
  styleUrls: ['./preview-edit-box.component.css']
})
export class PreviewEditBoxComponent implements OnInit {
  @Input() displayType = 1;
  @Input() article: any;
  @Input() editLink = '/admin/research/addnew/';

  slideEmitter = EmitterService.get('SLIDE');

  constructor() {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {

  }

  editSlide() {
    this.slideEmitter.emit('edit/' + this.article.id);
  }

  deleteSlide() {
    this.slideEmitter.emit('delete/' + this.article.id);
  }
}
