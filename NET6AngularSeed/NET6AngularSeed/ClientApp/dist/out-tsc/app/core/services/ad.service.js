import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
let ADService = class ADService extends BaseService {
    constructor(httpService, http) {
        super(httpService);
        this.http = http;
        super.endpoint$ = 'Employee';
    }
    getEmployeeByName(name) {
        return this.httpService.getByValue(name, `AD/Search/`);
    }
    getEmployeeByUserID(uid) {
        return this.httpService.getByValue(uid, `AD/SearchByUID/`);
    }
};
ADService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ADService);
export { ADService };
//# sourceMappingURL=ad.service.js.map