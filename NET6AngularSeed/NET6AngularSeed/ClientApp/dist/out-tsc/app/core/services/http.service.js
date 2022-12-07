import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { interval, throwError } from 'rxjs';
import { tap, switchMap, catchError, retry } from 'rxjs/operators';
let HttpService = class HttpService {
    constructor(http, toastrSvc, loader) {
        this.http = http;
        this.toastrSvc = toastrSvc;
        this.loader = loader;
        this.api = environment.api;
        this.headers = {};
        this.options = {};
        this.headers = new Object({ 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json' });
        this.options = { headers: this.headers, withCredentials: true };
    }
    getByTestURL(url) {
        return this.http.get(url)
            .pipe(catchError((error) => this.handleError(error)));
    }
    getByValue(value, apiControllerType) {
        const url = this.buildUrl(apiControllerType, value);
        return this.http.get(url, this.options)
            .pipe(catchError((error) => this.handleError(error)));
    }
    getAll(apiControllerType, optionalfield) {
        const url = this.buildUrl(apiControllerType, optionalfield);
        return this.http.get(url, this.options)
            .pipe(catchError((error) => this.handleError(error)));
    }
    getById(id, apiControllerType, optionalfield) {
        if (!optionalfield) {
            optionalfield = '';
        }
        const url = this.buildUrl(apiControllerType, optionalfield);
        return this.http.get(url + id, this.options)
            .pipe(catchError((error) => this.handleError(error)));
    }
    poll(model, polInt, apiControllerType, optionalfield) {
        if (!optionalfield) {
            optionalfield = '';
        }
        const pollinginterval = polInt;
        const url = this.buildUrl(apiControllerType, optionalfield);
        const body = JSON.stringify(model);
        return interval(pollinginterval).pipe(switchMap(() => this.http.post(url, body, this.options)), catchError((error) => this.handleError(error)));
    }
    fileUpload(formData, apiControllerType, optionalfield) {
        if (!optionalfield) {
            optionalfield = '';
        }
        const url = this.buildUrl(apiControllerType, optionalfield);
        return this.http.post(url, formData).pipe(retry(2), catchError((error) => this.handleError(error)));
    }
    post(model, apiControllerType, optionalfield) {
        const url = this.buildUrl(apiControllerType, optionalfield);
        const body = JSON.stringify(model);
        return this.http.post(url, body, this.options)
            .pipe(catchError((error) => this.handleError(error)));
    }
    upsert(model, apiControllerType, optionalfield) {
        const url = this.buildUrl(apiControllerType, optionalfield);
        const body = JSON.stringify(model);
        return this.http.post(url, body, this.options)
            .pipe(catchError((error) => this.handleError(error)));
    }
    delete(id, apiControllerType, optionalfield) {
        if (!optionalfield) {
            optionalfield = '';
        }
        const url = this.buildUrl(apiControllerType) + id;
        return this.http.delete(url + optionalfield, this.options)
            .pipe(tap(data => { }), catchError((error) => this.handleError(error)));
    }
    handleError(error) {
        console.log('error', error);
        let errMsg;
        if (error instanceof HttpErrorResponse) {
            const body = error.message || '';
            const err = body || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''}`;
        }
        else {
            errMsg = error.toString();
        }
        console.error(errMsg);
        this.showErrorLoader();
        this.toastrSvc.error(`An Error Occurred!: ${errMsg}`, `${error.statusText}`)
            .onHidden.subscribe();
        return throwError(errMsg);
    }
    showErrorLoader() {
        this.loader.errorLoader();
        setTimeout(() => {
            this.loader.resolveAllError();
            this.loader.resolveAllLoading();
        }, 5000);
    }
    buildUrl(apiControllerType, optionalField) {
        const path = apiControllerType;
        const environmentPath = environment.api;
        if (optionalField) {
            return environmentPath + path + optionalField;
        }
        else {
            return environmentPath + path;
        }
    }
};
HttpService = __decorate([
    Injectable()
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map