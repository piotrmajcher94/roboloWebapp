import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthRestService } from '../rest/auth.rest.service';


import * as jwt_decode from 'jwt-decode';
export const TOKEN_NAME: string = 'jwt_token';
export const LOGIN_SUCCESS: string = 'login_success';
export const LOGIN_FAILED: string = 'login_failed';
const AUTH_HEADER_KEY = 'Authorization';
const AUTH_PREFIX = 'Bearer';

@Injectable()
export class AuthService {

    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private authRestService: AuthRestService) {}

    getToken(): string {
        return localStorage.getItem(TOKEN_NAME);
      }

    setToken(token: string): void {
        localStorage.setItem(TOKEN_NAME, token);
    }
    
    clearToken() {
        localStorage.clear();
    }

    getTokenExpirationDate(token: string): Date {
        const decoded = jwt_decode(token);
    
        if (decoded.exp === undefined) return null;
    
        const date = new Date(0); 
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    isTokenExpired(token?: string): boolean {
        if(!token) token = this.getToken();
        if(!token) return true;
    
        const date = this.getTokenExpirationDate(token);
        if(date === undefined) return false;
        return !(date.valueOf() > new Date().valueOf());
    }

    login(usernameAndPassword): Observable<string> {
        return this.authRestService.login(JSON.stringify(usernameAndPassword), this.headers)
                .map(
                    (res) => {
                        let token = res.headers.get(AUTH_HEADER_KEY);
                        console.log("Received token: " + token);
                        if (token !== undefined) {
                            this.setToken(token);
                            return LOGIN_SUCCESS;
                        }
                    },
                    (err) => {
                        return LOGIN_FAILED;
                    }
                );
    }

    getSessionAuthHeaders(): Headers {
        if (this.headers.get(AUTH_HEADER_KEY) === null) {
            const token = localStorage.getItem(TOKEN_NAME);
            if(token) {
              this.headers.append(AUTH_HEADER_KEY, `${AUTH_PREFIX} ${token}`);
            }
        }
        return this.headers;
    }

    createAccount(registrationData) {
        return this.authRestService.createAccount(registrationData);
    }

    sendPasswordChangeTokenRequest(username: string) {
        return this.authRestService.sendPasswordChangeTokenRequest(username);
    }

    sendNewPassword(newPasswordData) {
        return this.authRestService.sendNewPassword(newPasswordData);
    }

}