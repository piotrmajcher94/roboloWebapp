import { AuthService } from '../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProjectRest {

    private restUrl = 'http://localhost:8080/';
    constructor(
        private http: Http) {
    }

    getAllProjectStubs(headers: Headers) {
        return this.http.get(
            this.restUrl + 'projects/stubs/all',
            {headers: headers}
        );
    }

    getProjectDetails(projectId: number, headers: Headers) {
        return this.http.get(this.restUrl + 'projects/' + projectId, {headers: headers});
    }

    createProject(data, headers) {
        return this.http.post(this.restUrl + 'projects/add', data, {headers: headers});
    }
}
