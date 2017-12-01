import {Injectable} from '@angular/core';
import {AuthService} from '../../admin/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class EventService {

  private numberOfDispalyEvents = 4;

  private getEventsUrl;
  private getUpcomingEventUrl;
  private editEventUrl;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.getEventsUrl = this.authService.apiUrl + '/event/get';
    this.getUpcomingEventUrl = this.authService.apiUrl + '/event/get-recent/';
    this.editEventUrl = this.authService.apiUrl + '/event/edit';
  }

  getEvents() {
    const url = this.getEventsUrl;
    return this.http.get(url);
  }

  getUpcomingEvent() {
    const url = this.getUpcomingEventUrl + this.numberOfDispalyEvents;
    return this.http.get(url);
  }

  editEvent(event: Event) {
    const url = this.editEventUrl;
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    return this.http.put(url, event, options);
  }
}
