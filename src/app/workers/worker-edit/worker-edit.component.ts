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
  constructor(private dialogRef: MatDialogRef<WorkerEditComponent>) { }

  ngOnInit() {
    this.workerForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
    });
  }
}
