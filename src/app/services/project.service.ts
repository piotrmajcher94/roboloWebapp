import { ProjectRest } from '../rest/project.rest';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class ProjectService {
    constructor(private projectRest: ProjectRest) {
    }

    getAllProjectStubs() {
        return this.projectRest.getAllProjectStubs().map( 
            (data) => {
                console.log(data);
                return data;
        });
    }
}