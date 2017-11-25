import { TaskAddComponent } from './../task-add/task-add.component';
import { TaskTO } from './../../tos/task.to';
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

  tasksToDo: TaskTO[];
  tasksInProgress: TaskTO[];
  tasksDone: TaskTO[];

  editModalRef: MatDialogRef<ProjectEditDetailsComponent>;
  addTaskModalRef: MatDialogRef<TaskAddComponent>;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.projectService.getProjectDetails(param['id']).subscribe(
          (data: ProjectTo) => {
            console.log(data);
            this.project = data;
            this.getProjectTasks();
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
        if (project != null) {
          this.project = project;
        }
      });
  }

  onAddTaskDialog() {
    this.addTaskModalRef = this.dialog.open(TaskAddComponent, {hasBackdrop: true, data: {projectId: this.project.id}});
    this.addTaskModalRef.afterClosed()
      .subscribe(
        // set lists 
      );
  }

  getProjectTasks() {
    this.projectService.getAllTasks(this.project.id).subscribe(
      (data) => {
        console.log(data);
        this.tasksToDo = data[0];
        this.tasksInProgress = data[1];
        this.tasksDone = data[2];
      },
      error => console.log(error)
    );
  }

}
