import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {User} from '../../shared/interface/user';

@Injectable()
export class AuthService {
  apiUrl = 'http://163.22.17.198:7777/api';
  loginRoute = this.apiUrl + '/account/login';
  logoutRoute = this.apiUrl + '/account/logout';
  changePasswordRoute = this.apiUrl + '/account/changepass';

  constructor(private http: Http, private router: Router) {
  }

  public login(userName: string, password: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});

    return this.http.post(this.loginRoute, JSON.stringify({
      'userName': userName,
      'password': password
    }), options).map((response) => {
        console.log(response.status);
        const user = response.json();
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('username', userName);
          this.router.navigate(['/admin/dashboard']);
        }
      },
      (err) => {
        console.log(err);
      });
  }

  logout() {
    const options = this.getHeader();

    return this.http.post(this.logoutRoute, null, options).map(response => {
        console.log(response.status);
        localStorage.clear();
        this.router.navigate(['/admin/login']);
      },
      err => {
        console.log(err);
      });
  }

  changePassword(oldPassword: string, newPassword: string, confirmPassword: string) {
    const options = this.getHeader();

    return this.http.post(this.changePasswordRoute,
      {
        'oldPassword': oldPassword,
        'newPassword': newPassword,
        'confirmPassword': confirmPassword
      }, options).map(response => {
      });
  }

  getHeader() {
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'bearer ' + user.accessToken);

    return new RequestOptions({headers: headers});
  }
}
