import {Injectable} from '@angular/core';

import {AuthService} from '../../admin/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LaboratoryServices {
  laboratoryGet = '/laboratory/get';
  laboratoryAdd = '/laboratory/add';
  laboratoryRemove = '/laboratory/remove';

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  getLaboratory() {
    const url = this.authService.apiUrl + this.laboratoryGet;
    return this.http.get(url);
  }

  // tslint:disable-next-line:one-line
  addLaboratory(data) {
    const url = this.authService.apiUrl + this.laboratoryAdd;
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    console.log(this.authService.getAccessToken());
    return this.http.post(url, data, options);
  }

  removeLaboratory(id: string) {
    const url = this.authService.apiUrl + this.laboratoryRemove;

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
