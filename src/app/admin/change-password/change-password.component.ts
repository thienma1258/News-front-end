import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  isShowOldPassword = false;
  isShowNewPassword = false;
  isShowConfirmPassword = false;
  isButtonEnable = true;
  showPasswordIcon = '../../../assets/images/display-password.png';
  hidePasswordIcon = '../../../assets/images/hide-password.png';

  changePasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.changePasswordForm = fb.group({
      'oldPassword': [null, Validators.required],
      'newPassword': [null, Validators.required],
      'confirmPassword': [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  togglePassword(field: string) {
    switch (field) {
      case 'old':
        this.isShowOldPassword = !this.isShowOldPassword;
        break;
      case 'new':
        this.isShowNewPassword = !this.isShowNewPassword;
        break;
      case 'confirm':
        this.isShowConfirmPassword = !this.isShowConfirmPassword;
        break;
    }
  }

  changePassword(oldPassword: string, newPassword: string, confirmPassword: string) {
    this.authService.changePassword(oldPassword, newPassword, confirmPassword).subscribe(
      data => {
        alert('Change password successful!');
      },
      err => {
        alert('Change password failed!');
      }
    );
  }
}
