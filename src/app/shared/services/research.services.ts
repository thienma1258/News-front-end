import {Injectable} from '@angular/core';

import {AuthService} from '../../admin/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {topic} from '../model/research-news-models';

@Injectable()
export class ResearchServices {
  reseachtopicapi = '/research/get';
  laboratorytopic = '/laboratory/get';
  filtertopics = '/article/filter';
  addTopicUrl = '/research/add';
  editTopicUrl = '/research/edit';
  removeTopicUrl = '/research/remove';

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  getresearchtopic() {
    const url = this.authService.apiUrl + this.reseachtopicapi;
    return this.http.get(url);
  }

  getlaboratorytopic() {
    const url = this.authService.apiUrl + this.laboratorytopic;
    return this.http.get(url);
  }

  getarticlebytopics(ids) {
    const data = {
      researchTopicIds: ids
    };
    const url = this.authService.apiUrl + this.filtertopics;
    return this.http.post(url, data);
  }

  addTopic(topic: topic) {
    const url = this.authService.apiUrl + this.addTopicUrl;
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    return this.http.post(url, topic, options);
  }

  editTopic(topic: topic) {
    const url = this.authService.apiUrl + this.editTopicUrl;
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    return this.http.put(url, topic, options);
  }

  removeTopic(id: string) {
    const url = this.authService.apiUrl + this.removeTopicUrl;
    const data: FormData = new FormData();
    data.append('id', id);

    const options = {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    return this.http.post(url, data, options);
  }
}
