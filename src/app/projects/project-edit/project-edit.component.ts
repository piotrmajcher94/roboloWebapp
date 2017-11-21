import { ProjectRest } from './../../rest/project.rest';
import { AuthService } from './../../auth/services/auth.service';
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

  constructor(private authService: AuthService, private projectsService: ProjectRest) { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required),
      'startDate': new FormControl(null, [Validators.required,
        Validators.pattern(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/)]),
      'addressTO': new FormGroup({
        'street': new FormControl(null, Validators.required),
        'houseNumber': new FormControl(null, Validators.required),
        'apartmentNumber': new FormControl(null, Validators.required),
        'city': new FormControl(null, Validators.required),
        'postCode': new FormControl(null, Validators.required),
        'country': new FormControl(null, Validators.required)
      })
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
    this.projectsService.createProject(this.projectForm.value, this.authService.getSessionAuthHeaders())
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

}
