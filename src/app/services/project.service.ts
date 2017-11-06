import { ProjectRest } from '../rest/project.rest';
import { AuthService } from '../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ProjectStubTO } from '../tos/project.stub.to';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProjectService {
    constructor(
        private projectRest: ProjectRest,
        private authService: AuthService) {
    }

    getAllProjectStubs() : Observable<ProjectStubTO[]>{
        let headers = this.authService.getSessionAuthHeaders();
        return this.projectRest.getAllProjectStubs(this.authService.getSessionAuthHeaders())
            .map((res :Response) => <ProjectStubTO[]> JSON.parse(res.text()));
    }
}