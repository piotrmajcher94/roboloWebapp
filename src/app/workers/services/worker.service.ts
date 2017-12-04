import { AuthService } from '../../auth/services/auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { WorkersRest } from '../rest/workers.rest';


@Injectable()
export class WorkersService {
    constructor(
        private workersRest: WorkersRest,
        private authService: AuthService) {
    }

}
