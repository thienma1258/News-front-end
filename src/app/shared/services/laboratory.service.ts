import {Injectable} from '@angular/core';

import {AuthService} from '../../admin/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class LaboratoryServices {
  laboratoryget = '/laboratory/get';
  laboratoryadd= '/laboratory/add';
  constructor(private http: HttpClient, private authService: AuthService) {

  }

  getlaboratory() {
    const url = this.authService.apiUrl + this.laboratoryget;
    return this.http.get(url);
  }

  // tslint:disable-next-line:one-line
  addnew(data){
    const url = this.authService.apiUrl + this.laboratoryadd;
    const options = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': this.authService.getAccessToken()
        }
      )
    };
    console.log(this.authService.getAccessToken());
   return  this.http.post(url, data, options );
  }
}
