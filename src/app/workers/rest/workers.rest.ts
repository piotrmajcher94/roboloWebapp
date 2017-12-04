import { AuthService } from '../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../../app.component';


@Injectable()
export class WorkersRest {

    private restUrl = baseURL;
    constructor(
        private http: Http) {
    }

    getWorkersList(ownerId) {

    }

    updateWorkersList(taskId) {

    }

    addWorker(workerData, ownerId) {

    }
}
