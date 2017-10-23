import { AuthRestService } from './../shared/auth-rest.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class AuthService {

    constructor(private authRestService: AuthRestService, private http: Http) {}

    createAccount(data) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8080/register', data, { headers: headers });
    }
}
