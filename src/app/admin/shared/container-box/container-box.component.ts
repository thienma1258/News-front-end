import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'content-box',
  templateUrl: './container-box.component.html',
  styleUrls: ['./container-box.component.css']
})
export class ContainerBoxComponent implements OnInit {
  @Input() title = 'TITLE';
  @Input() editLink = '';

  constructor() {
  }

  ngOnInit() {
  }

}
