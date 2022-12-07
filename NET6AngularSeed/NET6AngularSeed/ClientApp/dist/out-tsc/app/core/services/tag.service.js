import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
let TagService = class TagService extends BaseService {
    constructor(httpService, http) {
        super(httpService);
        this.http = http;
        this.endpoint = 'tag';
        super.endpoint$ = this.endpoint;
    }
    search(text) {
        return this.httpService.getByValue(text, `tag/search/`);
    }
};
TagService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TagService);
export { TagService };
//# sourceMappingURL=tag.service.js.map