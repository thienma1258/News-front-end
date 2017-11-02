import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {
  @Input() parentRoute: string;
  @Input() titles: string[];
  @Input() selectedTitle: string;

  constructor() {

  }

  ngOnInit() {
  }

  onSelect(title: string): void {
    this.selectedTitle = title;
  }
}
