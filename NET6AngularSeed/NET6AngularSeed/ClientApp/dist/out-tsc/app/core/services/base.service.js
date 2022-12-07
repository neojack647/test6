import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let BaseService = class BaseService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getById(id) {
        return this.httpService.getById(id, `${this.endpoint$}/GetById/`);
    }
    getAll() {
        return this.httpService.getAll(`${this.endpoint$}/GetAll`);
    }
    getByPage(params) {
        return this.httpService.upsert(params, `${this.endpoint$}/ByPage`);
    }
    upsert(obj) {
        return this.httpService.upsert(obj, `${this.endpoint$}/Upsert`);
    }
    delete(id) {
        return this.httpService.delete(id, `${this.endpoint$}/Delete/`);
    }
};
BaseService = __decorate([
    Injectable()
], BaseService);
export { BaseService };
//# sourceMappingURL=base.service.js.map