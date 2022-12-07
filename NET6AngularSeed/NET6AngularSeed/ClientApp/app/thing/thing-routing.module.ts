import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Thing1Component } from './thing1/thing1.component';
import { Thing2Component } from './thing2/thing2.component';
import { Thing3Component } from './thing3/thing3.component';
import { PagingComponent } from './paging/paging.component';
import { ItemComponent } from './paging/item/item.component';

const routes: Routes = [
  { path: 'thing-1', component: Thing1Component },
  { path: 'thing-2', component: Thing2Component },
  { path: 'thing-3', component: Thing3Component },
  { path: 'paging', component: PagingComponent },
  { path: 'paging/item', component: ItemComponent },
  {path: '', redirectTo: 'thing-1', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [ RouterModule ]
})
export class ThingRoutingModule {
    static components = [ Thing1Component, Thing2Component, PagingComponent ];
}
