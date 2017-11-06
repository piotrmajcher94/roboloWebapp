import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService, LOGIN_SUCCESS, LOGIN_FAILED } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

    // Clear token if redirected to login page after login
    // You need to login again
    if (!this.authService.isTokenExpired()) {
      this.authService.clearToken();
    }
    
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe(
      (res) => {
        if (res === LOGIN_SUCCESS) {
          this.router.navigate(["/projects"]);
        } else {
          console.log(LOGIN_FAILED);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
