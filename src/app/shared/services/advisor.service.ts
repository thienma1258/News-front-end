import {Injectable} from '@angular/core';
import {AuthService} from '../../admin/shared/auth.service';
import {HttpClient} from '@angular/common/http';
import {AdvisorGroup} from '../enum/advisor-group.enum';

@Injectable()
export class AdvisorService {
  private getAllAdvisorsUrl;
  private getAdvisorsByGroupUrl;
  private editAdvisorUrl;
  private removeAdvisorUrl;
  private orderAdvisorUrl;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.getAllAdvisorsUrl = authService.apiUrl + '/faculty/get';
    this.getAdvisorsByGroupUrl = authService.apiUrl + '/faculty/filter/';
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
}
