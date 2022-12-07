import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from './loading.service';
import { interval, throwError } from 'rxjs';
import { tap, switchMap, catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpService {
  api = environment.api;
  headers = {};
  options = {};
  constructor(
    private http: HttpClient, private toastrSvc: ToastrService, private loader: LoadingService) {
    this.headers = new Object({'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json'});
    this.options = {headers: this.headers, withCredentials: true};
  }

  public getByTestURL(url: string) {
    return this.http.get(url)
      .pipe(
        
        catchError((error) => this.handleError(error))
      );
  }

  public getByValue(value: any, apiControllerType: string) {
    const url = this.buildUrl(apiControllerType, value);
    return this.http.get(url, this.options)
      .pipe(
        
        catchError((error) => this.handleError(error))
      );
  }

  public getAll(apiControllerType: string, optionalfield?: string) {
    const url = this.buildUrl(apiControllerType, optionalfield);
    return this.http.get(url, this.options)
      .pipe(
        
        catchError((error) => this.handleError(error))
      );
  }

  public getById(id: number, apiControllerType: string, optionalfield?: string) {

    if (!optionalfield) {
      optionalfield = '';
    }
    const url = this.buildUrl(apiControllerType, optionalfield);
    return this.http.get(url + id, this.options)
      .pipe(
        
        catchError((error) => this.handleError(error))
      );
  }

  public poll(model: any, polInt: number, apiControllerType: string, optionalfield?: string) {
    if (!optionalfield) {
      optionalfield = '';
    }
    const pollinginterval = polInt;
    const url = this.buildUrl(apiControllerType, optionalfield);
    const body = JSON.stringify(model);

    return interval(pollinginterval).pipe(
      switchMap(() => this.http.post(url, body, this.options)),
      
      catchError((error) => this.handleError(error))
    );
  }

  public fileUpload(formData: FormData, apiControllerType: string, optionalfield?: string) {
    if (!optionalfield) {
      optionalfield = '';
    }
    const url = this.buildUrl(apiControllerType, optionalfield);
    return this.http.post(url, formData).pipe(retry(2),
      catchError((error) => this.handleError(error)));

  }

  public post(model: any, apiControllerType: string, optionalfield?: string) {
    const url = this.buildUrl(apiControllerType, optionalfield);
    const body = JSON.stringify(model);
    return this.http.post(url, body, this.options)
      .pipe(
        
        catchError((error) => this.handleError(error))
      );
  }

  public upsert(model: any, apiControllerType: string, optionalfield?: string) {
    const url = this.buildUrl(apiControllerType, optionalfield);
    const body = JSON.stringify(model);
    return this.http.post(url, body, this.options)
      .pipe(
        
        catchError((error) => this.handleError(error))
      );
  }


  public delete(id: number, apiControllerType: string, optionalfield?: string) {
    if (!optionalfield) {
      optionalfield = '';
    }
    const url = this.buildUrl(apiControllerType) + id;
    return this.http.delete(url + optionalfield, this.options)
      .pipe(
        tap(data => { }),
        catchError((error) => this.handleError(error)));
  }

  // private handleError(error: HttpResponse<any>) {

  //   console.log('error', error);
  //   let errMsg: string;
  //   if (error instanceof HttpErrorResponse ) {
  //     const body = error.message || '';
  //     const err = body || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''}`;
  //   } else {
  //     errMsg = error.toString();
  //   }
  //   console.error(errMsg);
  //   this.showErrorLoader();
  //   this.toastrSvc.error(`An Error Occurred!: ${errMsg}`, `${error.statusText}`)
  //     .onHidden.subscribe();
  //   return throwError(errMsg);
  // }

  private handleError(error: HttpResponse<any>) {
      console.log('err', error);
    let errMsg: string;
    if (error instanceof HttpErrorResponse ) {

      const body = error.error || '';
      const err = body || JSON.stringify(body);
      errMsg = `[HTTP ERROR ${error.status}] - ${body || ''}`;
    } else {
      errMsg = error.toString();
    }
    console.error(errMsg);
    this.showErrorLoader();
    this.toastrSvc.error(`${errMsg}`, `${error.statusText}`, {'timeOut': 0})
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

  private buildUrl(apiControllerType: string, optionalField?: string) {
    const path = apiControllerType;
    const environmentPath = environment.api;
    if (optionalField) {
      return environmentPath + path + optionalField;
    } else {
      return environmentPath + path;
    }
  }
}
