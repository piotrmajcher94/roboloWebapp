import { WorkerEditComponent } from './../worker-edit/worker-edit.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {

  workers = [1, 2, 3, 4, 5];
  editModalRef: MatDialogRef<WorkerEditComponent>;
  constructor(
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  onOpenDialog() {
    this.editModalRef = this.dialog.open(WorkerEditComponent);
  }
}
