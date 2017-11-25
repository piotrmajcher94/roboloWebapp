import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ProjectTo } from './../tos/project.to';
import { Component, OnInit, Inject } from '@angular/core';
import { ProjectService } from '../projects/services/project.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-project-edit-details',
  templateUrl: './project-edit-details.component.html',
  styleUrls: ['./project-edit-details.component.css']
})
export class ProjectEditDetailsComponent implements OnInit {

  project: ProjectTo;
  projectForm: FormGroup;
  errorMessage;

  constructor(private projectsService: ProjectService,
    private dialogRef: MatDialogRef<ProjectEditDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
      console.log(data);
      this.project = data.project;
    }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(this.project.projectName, Validators.required),
      'startDate': new FormControl(this.project.startDate, [Validators.required,
        Validators.pattern(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/)]),
      'address': new FormGroup({
        'street': new FormControl(this.project.address.street, Validators.required),
        'houseNumber': new FormControl(this.project.address.houseNumber, Validators.required),
        'apartmentNumber': new FormControl(this.project.address.apartmentNumber),
        'city': new FormControl(this.project.address.city, Validators.required),
        'postCode': new FormControl(this.project.address.postCode, Validators.required),
        'country': new FormControl(this.project.address.country, Validators.required)
      })
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
    this.projectsService.updateProject(this.project.id, this.projectForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.dialogRef.close(data);
        },
        error => this.errorMessage = 'Project update error'
      );
  }

}
