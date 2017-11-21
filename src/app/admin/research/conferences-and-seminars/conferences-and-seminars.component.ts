import { Component, OnInit } from '@angular/core';
import {Article} from '../../../shared/interface/article';
import {Router} from "@angular/router";

@Component({
  selector: 'conferences-and-seminars',
  templateUrl: './conferences-and-seminars.component.html',
  styleUrls: ['./conferences-and-seminars.component.css']
})
export class ConferencesAndSeminarsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewArticle() {
    this.router.navigate(['/admin/research/addnew', {
      type: 'conferences-and-seminars'
    }]);
  }
}
