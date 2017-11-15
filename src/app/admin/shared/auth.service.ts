import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  constructor() {
  }

  public login(userName: string, password: string) {
    if (userName === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      console.log('login successful');
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.isLoggedIn = false;
  }
}
