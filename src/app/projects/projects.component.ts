import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
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
        stubs.forEach(element => {
          console.log("Project name: " + element.projectName);
          console.log("Client name: " + element.clientTO.name);
        });
      },
      (err) => {
        console.log("error");
        console.error(err);
      }
    );
  }

}
