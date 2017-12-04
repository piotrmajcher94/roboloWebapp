import { AuthService } from '../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { WorkersRest } from '../rest/workers.rest';
import { WorkerTO } from '../../tos/worker.to';


@Injectable()
export class WorkersService {
    constructor(
        private workersRest: WorkersRest,
        private authService: AuthService) {
    }

    getAllWorkers(): Observable<WorkerTO[]> {
        return this.workersRest.getWorkersList(this.authService.getSessionAuthHeaders()).map(
            (data) => <WorkerTO[]>data.json()
        );
    }

    addWorker(workerData): Observable<WorkerTO> {
        return this.workersRest.addWorker(workerData, this.authService.getSessionAuthHeaders()).map(
            data => <WorkerTO>data.json()
        );
    }
}
