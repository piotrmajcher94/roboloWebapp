import { ProjectService } from './../../services/project.service';
import { ProjectStubTO } from './../../tos/project.stub.to';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects: ProjectStubTO[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAllProjectStubs().subscribe(
      (data: ProjectStubTO[]) => this.projects = data,
      (error) => console.log(error)
    );
  }
  
}
