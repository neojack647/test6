import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { BaseListComponent } from 'ClientApp/app/core/base/baselist.component';
import { Thing } from '../../core/models/thing';
let PagingComponent = class PagingComponent extends BaseListComponent {
    constructor(router, renderer, service, loader, toastr, dialogService, dialog) {
        super(router, renderer, service, loader, toastr, dialogService, dialog);
        super.direction = 'desc';
    }
    add() {
        localStorage.clear();
        let t = new Thing();
        t.id = 0;
        this.edit(t);
    }
    edit(t) {
        localStorage.clear();
        localStorage.setItem('id', JSON.stringify(t.id));
        this.router.navigate(['/paging/item']);
    }
};
PagingComponent = __decorate([
    Component({
        selector: 'app-paging',
        templateUrl: './paging.component.html',
    })
], PagingComponent);
export { PagingComponent };
//# sourceMappingURL=paging.component.js.map