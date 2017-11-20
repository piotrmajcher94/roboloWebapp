import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  projectForm: FormGroup;
  errorMessage: string;

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required),
      'startDate': new FormControl(null, Validators.required),
      'addressTO': new FormArray([new FormGroup({
        'street': new FormControl(null, Validators.required),
        'houseNumber': new FormControl(null, Validators.required),
        'apartmentNumber': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
        'postCode': new FormControl(null, Validators.required),
        'country': new FormControl(null, Validators.required)
      })])
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

}
