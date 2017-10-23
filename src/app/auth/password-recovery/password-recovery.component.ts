import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {
  usernameForm: FormGroup;
  newPasswordForm: FormGroup;
  emailWasSent = false;
  errorMessage: string;
  successMessage: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.usernameForm = new FormGroup({
      'username': new FormControl(null, Validators.required)
    });
    this.newPasswordForm = new FormGroup({
      'token': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'matchingPassword': new FormControl(null, Validators.required)
    });
  }

  onSubmitEmail() {
    this.authService.sendPasswordChangeTokenRequest(this.usernameForm.get('username').value).subscribe(
      (data) => {
        this.successMessage = data.text();
        this.errorMessage = null;
        this.emailWasSent = true;
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.text();
        this.successMessage = null;
      }
    );
  }

  onSubmitPasswords() {
    this.authService.sendNewPassword(this.newPasswordForm.value).subscribe(
      (data) => {
        console.log(data);
        this.successMessage = data.text();
        this.errorMessage = null;
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.text();
        this.successMessage = null;
      }
    );
  }

}
