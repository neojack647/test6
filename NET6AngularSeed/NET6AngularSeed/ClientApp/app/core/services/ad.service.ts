import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Employee } from 'ClientApp/app/core/models/employee';

@Injectable({
  providedIn: 'root'
})
export class ADService extends BaseService<Employee> {
  constructor(httpService: HttpService, private http: HttpClient) {
    super(
      httpService
      );
    super.endpoint$ = 'Employee';
   }

  getEmployeeByName(name: string) {
    return this.httpService.getByValue(name, `AD/Search/`);
  }

  getEmployeeByUserID(uid: string) {
    return this.httpService.getByValue(uid, `AD/SearchByUID/`);
  }

}
