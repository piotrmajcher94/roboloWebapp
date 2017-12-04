import { ProjectService } from './../services/project.service';
import { WorkerTO } from './../../tos/worker.to';
import { WorkersService } from './../../workers/services/worker.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'app-add-worker-dialog',
  templateUrl: './add-worker-dialog.component.html',
  styleUrls: ['./add-worker-dialog.component.css']
})
export class AddWorkerDialogComponent implements OnInit {

  errorMessage;
  addWorkerForm: FormGroup;

  allWorkersList: WorkerTO[];
  assignedWorkers: WorkerTO[];

  constructor(private dialogRef: MatDialogRef<AddWorkerDialogComponent>, private workerService: WorkersService,
    @Inject(MAT_DIALOG_DATA) private data, private projectService: ProjectService) { }

  ngOnInit() {
    this.addWorkerForm = new FormGroup({
      'worker': new FormControl(null, Validators.required),
    });

    this.workerService.getAllWorkers().subscribe(
      (data) => this.allWorkersList = data,
      error => console.log(error)
    );

    this.assignedWorkers = this.data.task.workers.slice();

  }

  onSubmit() {
    const workersIds = this.assignedWorkers.map(e => e.id);
    this.projectService.setTaskWorkers(workersIds, this.data.project.id, this.data.task.id)
    .subscribe(
      data => {
        this.dialogRef.close(data);
      },
      error => this.errorMessage = error.text
    );
  }

  onAddWorker() {
    console.log(this.addWorkerForm.value);
    this.assignedWorkers.push(this.addWorkerForm.value.worker);
  }

  removeWorker(worker) {
    this.assignedWorkers = this.assignedWorkers.filter(w => w !== worker);
  }

}
