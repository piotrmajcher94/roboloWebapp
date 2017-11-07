import { ProjectService } from './../../services/project.service';
import { ProjectTo } from './../../tos/project.to';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project: ProjectTo;

  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService) { }

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

}
