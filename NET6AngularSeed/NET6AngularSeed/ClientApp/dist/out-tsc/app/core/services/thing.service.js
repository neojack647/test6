import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
let ThingService = class ThingService extends BaseService {
    constructor(httpService, http) {
        super(httpService);
        this.http = http;
        this.testURL = 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1';
        this.endpoint = 'Thing';
        super.endpoint$ = 'Thing';
    }
    // Add unique http requests below
    getBacon() {
        return this.httpService.getByTestURL(this.testURL);
    }
    getHipster() {
        let url = 'http://hipsum.co/api/?type=hipster-centric&sentences=3';
        return this.httpService.getByTestURL(url);
    }
    getThings() {
        return this.http.get('api/things')
            .pipe(tap(_ => this.log('fetched things')), catchError(this.handleError('getThings', [])));
    }
    getTypes() {
        return this.httpService.getAll(`ThingType/GetAll`);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
    // Log to the console
    log(message) {
        console.log(message);
    }
};
ThingService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ThingService);
export { ThingService };
//# sourceMappingURL=thing.service.js.map