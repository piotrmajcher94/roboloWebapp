import { AuthRestService } from './../shared/auth-rest.service';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class AuthService {
    private headers: Headers;
    constructor(private authRestService: AuthRestService, private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    createAccount(data) {
        return this.http.post('http://localhost:8080/register', data, { headers: this.headers });
    }

    sendPasswordChangeTokenRequest(username: string) {
        return this.http.get('http://localhost:8080/password/retrieve/username/' + username, null);
    }

    sendNewPassword(data) {
        return this.http.post('http://localhost:8080/password/retrieve/newpassword', data, { headers: this.headers });
    }
}
