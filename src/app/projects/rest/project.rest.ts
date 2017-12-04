import { AuthService } from '../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../../app.component';


@Injectable()
export class ProjectRest {

    private restUrl = baseURL;
    constructor(
        private http: Http) {
    }

    getAllProjectStubs(headers: Headers) {
        return this.http.get(
            this.restUrl + '/projects/stubs/all',
            {headers: headers}
        );
    }

    getProjectDetails(projectId: number, headers: Headers) {
        return this.http.get(this.restUrl + '/projects/' + projectId, {headers: headers});
    }

    createProject(data, headers) {
        return this.http.post(this.restUrl + '/projects/add', data, {headers: headers});
    }

    updateProject(id, data, headers) {
        return this.http.post(this.restUrl + '/projects/update/' + id, data, {headers: headers});
    }

    deleteProject(id, headers) {
        return this.http.delete(this.restUrl + '/projects/delete/' + id, {headers: headers});
    }

    createTask(projectId, data, headers) {
        return this.http.post(this.restUrl + '/tasks/add/' + projectId, data, {headers: headers});
    }

    getAllTasks(projectId, headers) {
        return this.http.get(this.restUrl + '/tasks/all/' + projectId, {headers: headers});
    }

    setTaskDone(projectId, taskId, headers) {
        return this.http.post(this.restUrl + '/tasks/set/done/' + projectId + '/' + taskId, null, {headers: headers});
    }

    setTaskToDo(projectId, taskId, headers) {
        return this.http.post(this.restUrl + '/tasks/set/todo/' + projectId + '/' + taskId, null, {headers: headers});
    }

    setTaskInProgress(projectId, taskId, headers) {
        return this.http.post(this.restUrl + '/tasks/set/inprogress/' + projectId + '/' + taskId, null, {headers: headers});
    }

    deleteTask(projectId, taskId, headers) {
        return this.http.delete(this.restUrl + '/tasks/delete/' + projectId + '/' + taskId, {headers: headers});
    }

    setClient(projectId, clientId, headers) {
        return this.http.post(this.restUrl + '/projects/update-client/' + projectId + '/' + clientId, null, {headers: headers});
    }

    setTaskWorkers(taskWorkersIds, projectId, taskId, headers) {
        return this.http.post(this.restUrl + '/tasks/' + projectId + '/' + taskId + '/add-workers', taskWorkersIds, {headers: headers});
    }
}
