import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  errorMessage;
  taskForm: FormGroup;
  projectId;
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<TaskAddComponent>,
    private projectService: ProjectService) {
    this.projectId = data.projectId;
  }

  ngOnInit() {
    this.taskForm = new FormGroup({
      'description': new FormControl(null, Validators.required),
      'estimatedTaskDurationHours': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.taskForm.value);
    this.projectService.createTask(this.projectId, this.taskForm.value)
      .subscribe(
      data => {
        console.log(data);
        this.dialogRef.close(data);
      },
      error => {
        this.errorMessage = 'Task add error';
        console.log(error);
      }
      );
  }


}
