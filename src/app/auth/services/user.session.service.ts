import { Injectable } from '@angular/core';
import {Headers } from '@angular/http';

@Injectable()
export class UserSessionService {

    private headers: Headers;
    private isLoggedIn: boolean;

    constructor() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        
    }

    getSessionAuthHeaders() :Headers {
        let token = localStorage.getItem("Authorization");
        if (token !== undefined) {
            console.log("Found token! " + token);
            this.headers.append("Authorization", token);
        }
        return this.headers;
    }
}