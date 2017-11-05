
import { UserSessionService } from '../auth/services/user.session.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProjectRest {
    
    constructor(
        private userSessionService: UserSessionService, 
        private http: Http) {
    }

    getAllProjectStubs() {
        return this.http.get(
            'http://localhost:8080/projects/stubs/all', 
            {headers: this.userSessionService.getSessionAuthHeaders()}
        );
    }
}
