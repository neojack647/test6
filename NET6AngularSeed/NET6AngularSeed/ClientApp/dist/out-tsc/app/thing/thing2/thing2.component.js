import { __decorate } from "tslib";
import { Component } from '@angular/core';
let Thing2Component = class Thing2Component {
    constructor(service, loader, toastrService) {
        this.service = service;
        this.loader = loader;
        this.toastrService = toastrService;
        this.bacons = [];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.pollingSubscription) {
            this.pollingSubscription.unsubscribe();
        }
    }
    fetchBacon() {
        this.loader.showLoader();
        this.service.getBacon().subscribe((res) => {
            console.log('res is ', res);
            res.forEach(e => {
                this.bacons.push(e);
            });
            this.loader.hideLoader();
        }, err => { console.error('error!', err); this.loader.errorLoader(); });
    }
};
Thing2Component = __decorate([
    Component({
        selector: 'app-thing2',
        templateUrl: './thing2.component.html',
    })
], Thing2Component);
export { Thing2Component };
//# sourceMappingURL=thing2.component.js.map