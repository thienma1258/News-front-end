import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  assertImagesUrl = './../../../../assets/images/';
  carouselImages = ['001t.jpg', '070.jpg', '077.jpg'];

  constructor() { }

  ngOnInit() {
  }

}
