import {Injectable} from '@angular/core';
import {AuthService} from '../../admin/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AdvisorGroup} from '../enum/advisor-group.enum';
import {Advisor} from '../model/advisor';

@Injectable()
export class AdvisorService {
  private getAllAdvisorsUrl;
  private getAdvisorsByGroupUrl;
  private addAdvisorUrl;
  private editAdvisorUrl;
  private removeAdvisorUrl;
  private orderAdvisorUrl;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.getAllAdvisorsUrl = authService.apiUrl + '/faculty/get';
    this.getAdvisorsByGroupUrl = authService.apiUrl + '/faculty/filter/';
    this.addAdvisorUrl = authService.apiUrl + '/faculty/add';
    this.editAdvisorUrl = authService.apiUrl + '/faculty/edit';
    this.removeAdvisorUrl = authService.apiUrl + '/faculty/remove';
    this.orderAdvisorUrl = authService.apiUrl + '/faculty/edit-order';
  }

  getAllAdvisors() {
    const url = this.getAllAdvisorsUrl;
    return this.http.get(url);
  }

  getAdvisorbyGroup(group: AdvisorGroup) {
    const url = this.getAdvisorsByGroupUrl + group;
    return this.http.get(url);
  }

  addAdvisor(advisor: Advisor) {
    const url = this.addAdvisorUrl;
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    return this.http.post(url, advisor, options);
  }

  editAdvisor(advisor: Advisor) {
    const url = this.editAdvisorUrl;
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    return this.http.put(url, advisor, options);
  }

  removeAdvisor(id: string) {
    const url = this.removeAdvisorUrl;
    const data: FormData = new FormData();
    data.append('facultyId', id);
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

  changeAdvisorOrder(id: string, isUp: boolean) {
    const url = this.orderAdvisorUrl;
    const data: FormData = new FormData();
    data.append('id', id);
    data.append('isUp', isUp ? 'true' : 'false');
    const options = {
      headers: new HttpHeaders(
        {
          'Accept': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    return this.http.put(url, data, options);
  }
}
