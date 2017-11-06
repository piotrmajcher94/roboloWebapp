import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class AuthRestService {
    
    constructor(private http: Http) {}

    createAccount(registrationData) {
        return this.http.post('http://localhost:8080/register', registrationData, { headers: new Headers({'Content-Type':'application/json'}) });
    }

    sendPasswordChangeTokenRequest(username: string) {
        return this.http.get('http://localhost:8080/password/retrieve/username/' + username, { headers:  new Headers({'Content-Type':'application/json'}) });
    }

    sendNewPassword(newPasswordData) {
        return this.http.post('http://localhost:8080/password/retrieve/newpassword', newPasswordData, { headers:  new Headers({'Content-Type':'application/json'})});
    }

    login(loginData, headers: Headers) {
        return this.http.post('http://localhost:8080/login', loginData, {headers: headers});
    }
}
