import { WorkersService } from './../services/worker.service';
import { FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {

  workerForm: FormGroup;
  errorMessage;
  constructor(private dialogRef: MatDialogRef<WorkerEditComponent>,
              private workerService: WorkersService) { }

  ngOnInit() {
    this.workerForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
      'telephoneNumbers': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    let temp = this.workerForm.value.telephoneNumbers;
    this.workerForm.value.telephoneNumbers = [temp];
    this.workerService.addWorker(this.workerForm.value).subscribe(
      data => {
        console.log(data);
        this.dialogRef.close();
      },
      error => {
        this.errorMessage = error.text();
      }
    );
  }
}
