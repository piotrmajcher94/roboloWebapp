import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-worker-dialog',
  templateUrl: './add-worker-dialog.component.html',
  styleUrls: ['./add-worker-dialog.component.css']
})
export class AddWorkerDialogComponent implements OnInit {

  errorMessage;
  addWorkerForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.addWorkerForm = new FormGroup({
      'worker': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {

  }
}
