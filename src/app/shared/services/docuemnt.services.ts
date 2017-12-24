import {Injectable} from '@angular/core';

import {AuthService} from '../../admin/shared/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DocumentServices {
  documentget = '/file/get?numberOfPage=0';
  // tslint:disable-next-line:whitespace
  documentdelete='/File/delete';
  docuemntadd= '/file/upload';
  constructor(private http: HttpClient, private authService: AuthService) {

  }
  // tslint:disable-next-line:one-line
  getalldocument(){
    const url = this.authService.apiUrl + this.documentget;
    return this.http.get(url);
  }
  deletedocument(id){
    const url = this.authService.apiUrl + this.documentdelete;
      const options = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Authorization': this.authService.getAccessToken()
          }
        )
      };
      const data = [];
      data.push(id);
      console.log(data);
      return this.http.post(url, data, options);
    }
    // tslint:disable-next-line:one-line
    addnewdocument(file,status){

const formData: FormData = new FormData();
formData.append('File', file);
formData.append('status', status);
      const url = this.authService.apiUrl + this.docuemntadd;
      const options = {
        headers: new HttpHeaders(
          {
            'Authorization': this.authService.getAccessToken()
          }
        )
      };
return this.http.post(url, formData, options);
    }
}
