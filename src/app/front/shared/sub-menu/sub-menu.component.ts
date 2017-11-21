import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {
  @Input() parentRoute: string;
  @Input() parentRouteName: string;
  @Input() titles: any;
  @Input() selectedTitle: string;

  constructor(private router: Router) {

  }

  ngOnInit() {

  }

  // onSelect(title: string): void {
  //   this.selectedTitle = title;
  // }
}
