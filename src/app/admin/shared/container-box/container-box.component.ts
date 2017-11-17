import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'container-box',
  templateUrl: './container-box.component.html',
  styleUrls: ['./container-box.component.css']
})
export class ContainerBoxComponent implements OnInit {
  @Input() title = '';
  @Input() editLink = '';
  @Input() isShowSeeMore = false;
  @Input() isShowEditButton = false;

  constructor() {
  }

  ngOnInit() {
  }

}
