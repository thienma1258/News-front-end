import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../shared/model/event';

@Component({
  selector: 'event-preview',
  templateUrl: './event-preview.component.html',
  styleUrls: ['./event-preview.component.css']
})
export class EventPreviewComponent implements OnInit {
  @Input() event: Event;

  constructor() { }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
  }

}
