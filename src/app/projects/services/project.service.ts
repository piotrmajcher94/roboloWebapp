import { ProjectTo } from './../../tos/project.to';
import { ProjectRest } from '../rest/project.rest';
import { AuthService } from '../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { ProjectStubTO } from '../../tos/project.stub.to';
import { Observable } from 'rxjs/Observable';
import { TaskTO } from '../../tos/task.to';


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

    deleteProject(projectId): Observable<ProjectStubTO[]> {
        return this.projectRest.deleteProject(projectId, this.authService.getSessionAuthHeaders())
        .map((res: Response) =>  {
            console.log(res.text());
            return <ProjectStubTO[]> JSON.parse(res.text());
        });
    }

    updateProject(id, data): Observable<ProjectStubTO> {
        return this.projectRest.updateProject(id, data, this.authService.getSessionAuthHeaders())
        .map((res: Response) =>  {
            console.log(res.json());
            return <ProjectStubTO> res.json();
        });
    }

    createTask(projectId, data): Observable<TaskTO[][]> {
        return this.projectRest.createTask(projectId, data, this.authService.getSessionAuthHeaders())
        .map((res: Response) =>  {
            console.log(res.json());
            return <TaskTO[][]> res.json();
        });
    }

    getAllTasks(projectId): Observable<TaskTO[][]> {
        return this.projectRest.getAllTasks(projectId, this.authService.getSessionAuthHeaders())
        .map((res: Response) =>  {
            console.log(res.json());
            return <TaskTO[][]> res.json();
        });
    }

    setTaskDone(projectId, taskId): Observable<TaskTO[][]> {
        return this.projectRest.setTaskDone(projectId, taskId, this.authService.getSessionAuthHeaders())
        .map((res: Response) =>  {
            console.log(res.json());
            return <TaskTO[][]> res.json();
        });
    }

    setTaskToDo(projectId, taskId): Observable<TaskTO[][]> {
        return this.projectRest.setTaskToDo(projectId, taskId, this.authService.getSessionAuthHeaders())
        .map((res: Response) =>  {
            console.log(res.json());
            return <TaskTO[][]> res.json();
        });
    }

    setTaskInProgress(projectId, taskId): Observable<TaskTO[][]> {
        return this.projectRest.setTaskInProgress(projectId, taskId, this.authService.getSessionAuthHeaders())
        .map((res: Response) =>  {
            console.log(res.json());
            return <TaskTO[][]> res.json();
        });
    }

    deleteTask(projectId, taskId): Observable<TaskTO[][]> {
        return this.projectRest.deleteTask(projectId, taskId, this.authService.getSessionAuthHeaders())
        .map((res: Response) =>  {
            console.log(res.json());
            return <TaskTO[][]> res.json();
        });
    }

}
