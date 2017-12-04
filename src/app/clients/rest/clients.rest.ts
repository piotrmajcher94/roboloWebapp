import { baseURL } from './../../app.component';
import { AuthService } from '../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientsRest {

    private restUrl = baseURL;
    constructor(
        private http: Http) {
    }

    addClient(clientData, headers: Headers) {
        return this.http.post(baseURL + '/clients/add', clientData, {headers: headers});
    }

    getAllClients(headers: Headers) {
        return this.http.get(baseURL + '/clients/all', {headers: headers});
    }
}
