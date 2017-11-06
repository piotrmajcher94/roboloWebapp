import { ProjectRest } from '../rest/project.rest';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ProjectStubTO } from '../tos/project.stub.to';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProjectService {
    constructor(private projectRest: ProjectRest) {
    }

    getAllProjectStubs() : Observable<ProjectStubTO[]>{
        return this.projectRest.getAllProjectStubs()
            .map((res :Response) => <ProjectStubTO[]> JSON.parse(res.text()));
    }
}