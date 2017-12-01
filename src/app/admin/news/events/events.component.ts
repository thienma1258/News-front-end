import { Component, OnInit } from '@angular/core';
import {Article} from '../../../shared/model/article';
import {Router} from '@angular/router';
import {EventService} from '../../../shared/services/event.service';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private events: Event[] = [];

  constructor(private router: Router, private eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      data => {
        this.events = data['content'];
      },
      err => {
        console.log(err);
      }
    );
  }

  get Locale() {
    return localStorage.getItem('locale');
  }

  addNewArticle() {
    this.router.navigate(['/admin/news/addnew', {
      type: 'events'
    }]);
  }
}
