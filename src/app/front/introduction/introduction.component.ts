import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/interface/article';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  titles: any = [
    {
      'route': 'about-us',
      'name': 'About us'
    },
    {
      'route': 'facility-advisor',
      'name': 'Facility advisor'
    },
    {
      'route': 'department-structure-staff',
      'name': 'Department structure and staff'
    },
    {
      'route': 'contact',
      'name': 'Contact'
    }
  ];
  selectedTitle: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedTitle = params['title'];
      for (const title of this.titles) {
        if (title.route === this.selectedTitle) {
          this.selectedTitle = title.name;
        }
      }
    });
    this.parentRoute = '/introduction';
    this.parentRouteName = 'Introduction';
  }
}
