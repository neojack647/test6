import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// for testing
import { Thing } from './../models/thing';
import { Pagination } from '../models/pagination';
import { ThingType } from '../models/thingtype';

@Injectable({
  providedIn: 'root'
})
export class ThingService extends BaseService<Thing> {
  testURL = 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1';
  endpoint = 'Thing';
  Thing: Thing;

  // testArray used for sharing between components example
  testArray: number[] = [1, 40, 2300];

  constructor(httpService: HttpService, private http: HttpClient) {
    super(
      httpService
      );
    super.endpoint$ = 'Thing';
   }

   // Add unique http requests below
   getBacon() {
    return this.httpService.getByTestURL(this.testURL);
  }

  getHipster() {
    let url = 'https://hipsum.co/api/?type=hipster-centric&sentences=3';
    return this.httpService.getByTestURL(url);
  }


  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>('api/things')
    .pipe(
      tap(_ => this.log('fetched things')),
        catchError(this.handleError<Thing[]>('getThings', []))
    );
  }

  getTypes() {
    return this.httpService.getAll(`ThingType`);
  }

  sendCustomError(customErr: string) {
    return this.httpService.post(customErr, `ErrorMessage/CustomError`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Log to the console
  private log(message: string) {
    console.log(message);
  }

}
