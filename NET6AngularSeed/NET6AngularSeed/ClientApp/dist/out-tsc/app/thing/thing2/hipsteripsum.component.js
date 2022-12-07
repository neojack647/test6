import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HipsterIpsumComponent = class HipsterIpsumComponent {
    constructor(service, loader, toastrService) {
        this.service = service;
        this.loader = loader;
        this.toastrService = toastrService;
        this.ipsums = [];
    }
    ngOnInit() {
    }
    fetchHipster() {
        this.loader.showLoader();
        this.service.getHipster().subscribe((res) => {
            console.log('res is ', res);
            res.forEach(e => {
                this.ipsums.push(e);
            });
            this.loader.hideLoader();
        }, err => { console.error('error!', err); this.loader.errorLoader(); });
    }
};
HipsterIpsumComponent = __decorate([
    Component({
        selector: 'app-hipster-ipsum',
        templateUrl: './hipsteripsum.component.html',
    })
], HipsterIpsumComponent);
export { HipsterIpsumComponent };
//# sourceMappingURL=hipsteripsum.component.js.map