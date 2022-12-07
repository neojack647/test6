import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCovalentModule } from './material-covalent.module';
import { ToastrModule } from 'ngx-toastr';
import { CookieModule } from 'ngx-cookie';
import { CoreModule } from './core/core.module';
import { ThingModule } from './thing/thing.module';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            RouterModule,
            BrowserAnimationsModule,
            MaterialCovalentModule,
            ToastrModule.forRoot({ closeButton: true, progressBar: true, onActivateTick: true }),
            CookieModule.forRoot(),
            CoreModule,
            ThingModule
        ],
        providers: [MaterialCovalentModule,
            { provide: APP_BASE_HREF, useValue: '/' }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map