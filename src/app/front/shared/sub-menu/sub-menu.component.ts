import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit, Input {

  @Input() titles: string[];
  selectedTitle: string;

  constructor() {

  }

  ngOnInit() {
  }

  onSelect(title: string): void {
    this.selectedTitle = title;
  }
}
