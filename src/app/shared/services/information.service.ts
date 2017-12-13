import {Injectable} from '@angular/core';
import {AuthService} from '../../admin/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Information} from "../model/information";

@Injectable()
export class InformationService {

  private getInformationUrl;
  private editInformationUrl;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.getInformationUrl = this.authService.apiUrl + '/info/get';
    this.editInformationUrl = this.authService.apiUrl + '/info/edit';
  }

  getInformations() {
    const url = this.getInformationUrl;
    return this.http.get(url);
  }

  editInfomation(information: Information) {
    const url = this.editInformationUrl;
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    return this.http.put(url, information, options);
  }
}
