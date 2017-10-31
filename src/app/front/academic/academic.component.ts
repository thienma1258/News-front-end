import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {
  titles: string[];
  selectedTitle: string;

  constructor() {
  }

  ngOnInit() {
    this.titles = [
      'Academic Information',
      'Student Graduate & Undergraduate',
      'Teaching',
      'Degree Requirement'
    ];
    this.selectedTitle = this.titles[0];
  }

}
