import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShowPassword = false;
  isLogInFailed = false;

  showPasswordIcon = '../../../assets/images/display-password.png';
  hidePasswordIcon = '../../../assets/images/hide-password.png';
  isSignInButtonEnable = true;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, ) {
    this.loginForm = fb.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  togglePassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  login(username, password) {
    this.isSignInButtonEnable = false;
    this.authService.login(username, password).subscribe(
      data => {
      },
      error => {
        this.isLogInFailed = true;
        this.isSignInButtonEnable = true;
      }
    );
  }
}
