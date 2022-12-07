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
import { DragulaModule } from 'ng2-dragula';
import { Thing3Component } from './thing3/thing3.component';



@NgModule({
  declarations: [Thing1Component, Thing2Component, HipsterIpsumComponent, DialogComponent, PagingComponent, ItemComponent, TagDialogComponent, Thing3Component],
  imports: [
    CommonModule, CoreModule, ThingRoutingModule, MaterialCovalentModule, FormsModule, ReactiveFormsModule, DragulaModule.forRoot()
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class ThingModule { }
