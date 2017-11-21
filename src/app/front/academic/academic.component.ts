import {Component, OnInit} from '@angular/core';
import {Article} from '../../shared/interface/article';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {
  parentRoute: string;
  parentRouteName: string;
  titles: any = [
    {
      'route': 'academic-information',
      'name': 'Academic Information'
    },
    {
      'route': 'student-graduate-and-undergraduate',
      'name': 'Student graduate and undergraduate',
    },
    {
      'route': 'teaching',
      'name': 'Teaching',
    },
    {
      'route': 'degree-requirement',
      'name': 'Degree requirement'
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
    this.parentRoute = '/academic';
    this.parentRouteName = 'Academic & Admissions';
  }
}
