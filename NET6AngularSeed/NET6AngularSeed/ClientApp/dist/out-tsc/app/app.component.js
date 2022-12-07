import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let AppComponent = class AppComponent {
    constructor(router, loader, cookieService, document) {
        this.router = router;
        this.loader = loader;
        this.cookieService = cookieService;
        this.document = document;
        this.title = 'NET6AngularSeed';
        this.year = new Date().getFullYear();
        this.activeTheme = '';
        this.menuOpen = true;
    }
    ngOnInit() {
        this.router.events.subscribe(event => {
            // on route changes resolve the loading animation
            this.loader.resolveAllLoading();
            this.loader.resolveAllError();
        });
        this.checkThemeSetting();
    }
    checkThemeSetting() {
        const themeSettingCookie = this.cookieService.get('theme');
        this.activeTheme = themeSettingCookie;
        if (themeSettingCookie !== null) {
            switch (themeSettingCookie) {
                case 'dark-theme': {
                    this.document.body.classList.add('dark-theme');
                    break;
                }
                case 'light-theme': {
                    this.document.body.classList.add('light-theme');
                    break;
                }
                case 'solarized-dark-theme': {
                    this.document.body.classList.add('solarized-dark-theme');
                    break;
                }
                case 'solarized-light-theme': {
                    this.document.body.classList.add('solarized-light-theme');
                    break;
                }
            }
        }
    }
    setThemeSetting(themeVal) {
        let exp = this.expDate();
        let cookieOptions = { path: 'AngualrSeed', expires: exp };
        this.activeTheme = themeVal;
        this.cookieService.remove('theme');
        this.document.body.classList.remove('dark-theme', 'light-theme', 'solarized-dark-theme', 'solarized-light-theme');
        this.cookieService.put('theme', themeVal, cookieOptions);
        this.document.body.classList.add(themeVal);
    }
    expDate() {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth();
        let d = date.getDate();
        let nextYear = new Date(y + 1, m, d);
        return nextYear;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html'
    }),
    __param(3, Inject(DOCUMENT))
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map