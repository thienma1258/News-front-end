import {Injectable} from '@angular/core';

import {AuthService} from '../../admin/shared/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LaboratoryServices {
  laboratoryget = "/laboratory/get";
  constructor(private http: HttpClient, private authService: AuthService) {

  }

  getlaboratory() {
    const url = this.authService.apiUrl + this.laboratoryget;
    return this.http.get(url);
  }


}
