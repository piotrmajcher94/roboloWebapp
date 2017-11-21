import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {

  workers = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }

}
