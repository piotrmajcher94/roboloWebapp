import { ProjectTo } from './../../tos/project.to';
import { ProjectRest } from '../rest/project.rest';
import { AuthService } from '../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ProjectStubTO } from '../../tos/project.stub.to';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProjectService {
    constructor(
        private projectRest: ProjectRest,
        private authService: AuthService) {
    }

    getAllProjectStubs(): Observable<ProjectStubTO[]> {
        const headers = this.authService.getSessionAuthHeaders();
        return this.projectRest.getAllProjectStubs(this.authService.getSessionAuthHeaders())
            .map((res: Response) => {
                console.log("Res: " + res.text());
               return <ProjectStubTO[]> JSON.parse(res.text());
            }
            );
    }

    getProjectDetails(projectId: number): Observable<ProjectTo> {
        return this.projectRest.getProjectDetails(projectId, this.authService.getSessionAuthHeaders())
        .map((res: Response) => <ProjectTo>res.json());
    }

    createProject(data): Observable<ProjectStubTO[]> {
        return this.projectRest.createProject(data, this.authService.getSessionAuthHeaders())
        .map((res: Response) =>  {
            console.log(res.text());
            return <ProjectStubTO[]> JSON.parse(res.text());
        });
    }
}
