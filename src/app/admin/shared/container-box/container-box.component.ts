import {Component, Input, OnInit} from '@angular/core';
import {EmitterService} from "../emitter.service";

@Component({
  selector: 'container-box',
  templateUrl: './container-box.component.html',
  styleUrls: ['./container-box.component.css']
})
export class ContainerBoxComponent implements OnInit {
  @Input() title = '';
  @Input() isShowEditLink = false;
  @Input() seeMoreLink = '';

  private emitter;

  isEditting = false;

  constructor() {
  }

  ngOnInit() {
    this.emitter = EmitterService.get(this.title);
  }

  edit() {
    this.isEditting = true;
    this.emitter.emit('edit');
  }

  done() {
    this.isEditting = false;
    this.emitter.emit('done');
  }

  cancel() {
    this.isEditting = false;
    this.emitter.emit('cancel');
  }
}
