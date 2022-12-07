import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Thing1Component } from './thing1/thing1.component';
import { Thing2Component } from './thing2/thing2.component';
import { ThingRoutingModule } from './thing-routing.module';
import { DialogComponent } from './thing1/dialog/dialog.component';
import { MaterialCovalentModule } from './../material-covalent.module';
import { PagingComponent } from './paging/paging.component';
import { ItemComponent } from './paging/item/item.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagDialogComponent } from './paging/tagdialog/tagdialog.component';
import { HipsterIpsumComponent } from './thing2/hipsteripsum.component';
let ThingModule = class ThingModule {
};
ThingModule = __decorate([
    NgModule({
        declarations: [Thing1Component, Thing2Component, HipsterIpsumComponent, DialogComponent, PagingComponent, ItemComponent, TagDialogComponent],
        imports: [
            CommonModule, CoreModule, ThingRoutingModule, MaterialCovalentModule, FormsModule, ReactiveFormsModule,
        ],
        entryComponents: [
            DialogComponent
        ]
    })
], ThingModule);
export { ThingModule };
//# sourceMappingURL=thing.module.js.map