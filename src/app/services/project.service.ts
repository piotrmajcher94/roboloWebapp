import { AuthRestService } from './../shared/auth-rest.service';
import { ProjectRest } from '../rest/project.rest';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class ProjectService {
    private headers: Headers;
    constructor(
        private authRestService: AuthRestService, 
        private projectRest: ProjectRest,
        private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    getAllProjectStubs() {
        return this.projectRest.getAllProjectStubs().map( 
            (data) => {
                console.log(data);
                return data;
        });
    }
}