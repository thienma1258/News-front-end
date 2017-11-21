import { Component, OnInit } from '@angular/core';
import {Article} from '../../../shared/interface/article';
import {Router} from "@angular/router";

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewArticle() {
    this.router.navigate(['/admin/news/addnew', {
      type: 'events'
    }]);
  }
}
