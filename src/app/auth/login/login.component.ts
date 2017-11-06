import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthRestService } from '../rest/auth.rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private authRestService: AuthRestService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.authRestService.login(this.loginForm.value).subscribe(
      (res) => {
        localStorage.setItem('Authorization', res.headers.get('Authorization'));
        this.router.navigate(["/projects"]);
      },
      (err) => {
        //TODO Login failed
        console.log(err);
      }
    );
  }

}
