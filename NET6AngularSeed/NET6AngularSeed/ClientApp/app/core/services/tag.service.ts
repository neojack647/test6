import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable, of } from 'rxjs';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService extends BaseService<Tag> {
  endpoint = 'tag';
  
  constructor(httpService: HttpService, private http: HttpClient) {
    super(
      httpService
      );
    super.endpoint$ = this.endpoint;
   }

  public search(text: string) {
    return this.httpService.getByValue(text, `tag/search/`);
  }


}
