import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  clientForm: FormGroup;
  errorMessage;
  constructor() { }

  ngOnInit() {
    this.clientForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'telephoneNumber': new FormControl(null, Validators.required),
      'emailAddress': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    
  }

}
