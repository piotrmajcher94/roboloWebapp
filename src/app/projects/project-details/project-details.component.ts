import { ProjectEditDetailsComponent } from './../../project-edit-details/project-edit-details.component';
import { ProjectEditComponent } from './../project-edit/project-edit.component';
import { ProjectService } from './../services/project.service';
import { ProjectTo } from './../../tos/project.to';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project: ProjectTo;
  editModalRef: MatDialogRef<ProjectEditDetailsComponent>;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.projectService.getProjectDetails(param['id']).subscribe(
          (data: ProjectTo) => {
            console.log(data);
            this.project = data;
          },
          (error) => console.log(error)
        );
      }
    );
  }

  onOpenEditDialog() {
    this.editModalRef = this.dialog.open(ProjectEditDetailsComponent, {hasBackdrop: true,
      data: {project: this.project}});
    this.editModalRef.afterClosed()
      .subscribe(project => {
        if (project === null) {
          this.project = project;
        }
      });
  }

}
