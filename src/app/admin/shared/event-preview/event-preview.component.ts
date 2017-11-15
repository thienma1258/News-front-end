import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../front/shared/interface/event';

@Component({
  selector: 'event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {
  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
