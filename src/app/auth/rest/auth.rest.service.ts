import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class AuthRestService {
    
    constructor(private http: Http) {}

    createAccount(data, headers: Headers) {
        return this.http.post('http://localhost:8080/register', data, { headers: headers });
    }

    sendPasswordChangeTokenRequest(username: string, headers: Headers) {
        return this.http.get('http://localhost:8080/password/retrieve/username/' + username, { headers: headers });
    }

    sendNewPassword(data, headers: Headers) {
        return this.http.post('http://localhost:8080/password/retrieve/newpassword', data, { headers: headers });
    }

    login(data, headers: Headers) {
        return this.http.post('http://localhost:8080/login', data, {headers: headers});
    }
}
