import { FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {

  workerForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.workerForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'surname': new FormControl(null, Validators.required),
    });
  }
}
