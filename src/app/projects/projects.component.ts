import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project.service';
import { ProjectStubTO } from '../tos/project.stub.to';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    console.log("getting data");
    this.projectService.getAllProjectStubs().subscribe(
      (res) => {
        let stubs: ProjectStubTO[] = res;
      },
      (err) => {
        console.log("error");
        console.error(err);
      }
    );
  }

}
