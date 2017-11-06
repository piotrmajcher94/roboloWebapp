import { AuthService } from '../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProjectRest {
    
    constructor(
        private http: Http) {
    }

    getAllProjectStubs(headers: Headers) {
        return this.http.get(
            'http://localhost:8080/projects/stubs/all', 
            {headers: headers}
        );
    }
}
