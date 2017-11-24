import { Router } from '@angular/router';
import { AuthService } from "../auth/services/auth.service";
import { Component, OnInit } from '@angular/core';
import { ProjectEditComponent } from './../projects/project-edit/project-edit.component';
import {VERSION, MatDialog, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  public isCollapsed = true;
  editModalRef: MatDialogRef<ProjectEditComponent>;
  constructor(private router: Router, private authService: AuthService, private dialog: MatDialog) { }

  isUserLoggedIn() {
    return !this.authService.isTokenExpired();
  }

  showEditProjectDialog() {
    this.editModalRef = this.dialog.open(ProjectEditComponent);
  }
}
