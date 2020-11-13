import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from 'src/app/services/base.service';
import { Repositorie } from '../models/repositorie';

@Injectable()
export class UserService extends BaseService {

    user = 'andredff';

    constructor(private http: HttpClient) { super(); }

    getUser(): Observable<any> {
        const response = this.http
            .get(this.UrlServiceV1 + 'andredff')
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }

    getRepositories(): Observable<Repositorie> {
        const response = this.http
            .get(this.UrlServiceV1 + 'andredff/repos')
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }

    getStarred(): Observable<Repositorie> {
        const response = this.http
            .get(`${this.UrlServiceV1}${this.user}/starred`)
            .pipe(
                map(this.extractData),
                catchError(this.serviceError));

        return response;
    }
}
