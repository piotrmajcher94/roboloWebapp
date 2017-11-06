import { AuthRestService } from '../rest/auth.rest.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  errorMessage;

  constructor(private authRestService: AuthRestService, private router: Router) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'matchingPassword': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.registrationForm);
    // this.authRestService.createAccount(this.registrationForm.value).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.router.navigate(['/register', 'confirmation']);
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.errorMessage = error.text();
    //   }
    );
  }

}
