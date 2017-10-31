import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../interface/event';

@Component({
  selector: 'app-event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {
  @Input() event: Event;

  constructor() {
  }

  ngOnInit() {
  }

}
