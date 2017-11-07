import { ProjectStubTO } from './../../../tos/project.stub.to';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.css']
})
export class ProjectsListItemComponent implements OnInit {

  @Input() project: ProjectStubTO;
  constructor() { }

  ngOnInit() {
  }

}
