import {Component, Input, OnInit} from '@angular/core';
import {Advisor} from '../../../shared/model/advisor';

@Component({
  selector: 'advisor-infomation',
  templateUrl: './advisor-infomation.component.html',
  styleUrls: ['./advisor-infomation.component.css']
})
export class AdvisorInfomationComponent implements OnInit {
  @Input() advisor: Advisor;

  constructor() {
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  ngOnInit() {
  }

  edit() {

  }

  remove() {

  }

}
