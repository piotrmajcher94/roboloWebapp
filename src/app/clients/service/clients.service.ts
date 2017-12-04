import { ClientTO } from './../../tos/client.to';
import { ClientsRest } from './../rest/clients.rest';
import { AuthService } from '../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientsService {
    constructor(
        private clientsRest: ClientsRest,
        private authService: AuthService) {
    }

    addClient(clientData) {
        const headers = this.authService.getSessionAuthHeaders();
        return this.clientsRest.addClient(clientData, headers).map((res: Response) => {
            console.log('[CS] Add Response: ' + res.text());
            return <ClientTO[]>res.json();
        });
    }

    getAllClients(): Observable<ClientTO[]> {
        const headers = this.authService.getSessionAuthHeaders();
        return this.clientsRest.getAllClients(headers).map((res: Response) => {
            console.log('[CS] Get all clients: ' + res.text());
            return <ClientTO[]> res.json();
        });
    }

}
