import { Injectable } from '@angular/core';
import {Headers } from '@angular/http';

@Injectable()
export class UserSessionService {

    private headers: Headers;

    constructor() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

        // HARDCODED FOR NOW!!!!!!!!!!!!!!!!!!!!
        let username: string = 'username';
        let password: string = 'password';
        ////////////////////////////////////////
        /*
        TODO here we should have authorization and session token saved here after login, when the token-based authorization
        is made on the backend
        */
        this.headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    }

    getSessionAuthHeaders() :Headers {
        return this.headers;
    }
}