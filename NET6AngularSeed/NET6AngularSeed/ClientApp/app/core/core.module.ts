import { DebounceDirective } from './directives/debounce.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingService } from './services/loading.service';
import { HttpService } from './services/http.service';
import { NavListComponent } from './nav-list/nav-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialCovalentModule } from '../material-covalent.module';
import { BaseListComponent } from './base/baselist.component';

import { ThingService } from './services/thing.service';
import { SafePipe } from './pipes/safe.pipe';
import { SpecialCharacterDirective } from './directives/special-character-filter.directive';


@NgModule({
  declarations: [NavListComponent, DebounceDirective, SpecialCharacterDirective, SafePipe  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialCovalentModule
  ],
  providers: [
    LoadingService,
    HttpService,
    ThingService
  ],
  exports: [ NavListComponent, DebounceDirective, SpecialCharacterDirective, SafePipe ]
})
export class CoreModule { }
