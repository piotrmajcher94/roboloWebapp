import { AuthRestService } from './../shared/auth-rest.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


@Injectable()
export class ProjectRest {
    private headers: Headers;
    
    constructor(private authRestService: AuthRestService, private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        let username: string = 'username';
        let password: string = 'password';
        this.headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    }

    getAllProjectStubs() {
        return this.http.get('http://localhost:8080/projects/stubs/all', {headers: this.headers});
    }
}
