import { Component, OnInit, Input } from '@angular/core';
import { WorkerTO } from '../../../tos/worker.to';

@Component({
  selector: 'app-workers-list-item',
  templateUrl: './workers-list-item.component.html',
  styleUrls: ['./workers-list-item.component.css']
})
export class WorkersListItemComponent implements OnInit {

  @Input()
  worker: WorkerTO;
  constructor() { }

  ngOnInit() {
  }

}
