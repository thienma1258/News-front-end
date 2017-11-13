import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShowPassword = false;
  showPasswordIcon = '../../../assets/images/display-password.png';
  hidePasswordIcon = '../../../assets/images/hide-password.png';

  constructor() {
  }

  ngOnInit() {
  }

  togglePassword() {
    this.isShowPassword = !this.isShowPassword;
  }
}
