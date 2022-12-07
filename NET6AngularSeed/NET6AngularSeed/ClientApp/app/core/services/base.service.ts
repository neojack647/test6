import { Injectable, Injector, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Pagination } from '../models/pagination';

@Injectable()
export class BaseService<T> {

    obj$: T;
    endpoint$: string;
    constructor(protected httpService: HttpService) {
    }

    public getById(id: number): Observable<string | boolean | object | object> {
        return this.httpService.getById(id, `${this.endpoint$}/`);
    }

    public getAll(): Observable<string | boolean | object> {
        return this.httpService.getAll(`${this.endpoint$}`);
    }

    public getByPage(params): Observable<string | boolean | object> {
        return this.httpService.upsert(params, `${this.endpoint$}/ByPage`);
    }

    public upsert(obj: T): Observable<string | boolean | object> {
        return this.httpService.upsert(obj, `${this.endpoint$}/Upsert`);
    }

    public delete(id: number): Observable<object> {
        return this.httpService.delete(id, `${this.endpoint$}/Delete/`);
    }

}
