import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Thing1Component } from './thing1/thing1.component';
import { Thing2Component } from './thing2/thing2.component';
import { PagingComponent } from './paging/paging.component';
import { ItemComponent } from './paging/item/item.component';
const routes = [
    { path: 'thing-1', component: Thing1Component },
    { path: 'thing-2', component: Thing2Component },
    { path: 'paging', component: PagingComponent },
    { path: 'paging/item', component: ItemComponent },
    { path: '', redirectTo: 'thing-1', pathMatch: 'full' },
];
let ThingRoutingModule = class ThingRoutingModule {
};
ThingRoutingModule.components = [Thing1Component, Thing2Component, PagingComponent];
ThingRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, { useHash: true })],
        exports: [RouterModule]
    })
], ThingRoutingModule);
export { ThingRoutingModule };
//# sourceMappingURL=thing-routing.module.js.map