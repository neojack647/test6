import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let NavListComponent = class NavListComponent {
    constructor() {
        // @Input() menuOpen: boolean;
        this.menuOpen = false;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], NavListComponent.prototype, "menuOpen", void 0);
NavListComponent = __decorate([
    Component({
        selector: 'app-nav-list',
        templateUrl: './nav-list.component.html'
    })
], NavListComponent);
export { NavListComponent };
//# sourceMappingURL=nav-list.component.js.map