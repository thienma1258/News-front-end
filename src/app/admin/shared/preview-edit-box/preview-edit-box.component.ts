import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../front/shared/interface/article';
import {ASSERT_IMAGES_URL} from '../../../app.component';

@Component({
  selector: 'preview-edit-box',
  templateUrl: './preview-edit-box.component.html',
  styleUrls: ['./preview-edit-box.component.css']
})
export class PreviewEditBoxComponent implements OnInit {
  assertImagesUrl = ASSERT_IMAGES_URL;
  @Input() displayType = 1;
  @Input() article: Article;
  @Input() editLink = '/admin/research/addnew/';

  constructor() { }

  ngOnInit() {

  }

}
