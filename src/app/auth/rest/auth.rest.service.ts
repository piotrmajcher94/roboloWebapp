import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class AuthRestService {
    
    baseUrl = 'http://192.168.0.23:8080/';

    constructor(private http: Http) {}

    createAccount(registrationData) {
        return this.http.post(this.baseUrl + '/register', registrationData, { headers: new Headers({'Content-Type':'application/json'}) });
    }

    sendPasswordChangeTokenRequest(username: string) {
        return this.http.get(this.baseUrl + '/password/retrieve/username/' + username, { headers:  new Headers({'Content-Type':'application/json'}) });
    }

    sendNewPassword(newPasswordData) {
        return this.http.post(this.baseUrl + '/password/retrieve/newpassword', newPasswordData, { headers:  new Headers({'Content-Type':'application/json'})});
    }

    login(loginData, headers: Headers) {
        return this.http.post(this.baseUrl + '/login', loginData, {headers: headers});
    }
}
