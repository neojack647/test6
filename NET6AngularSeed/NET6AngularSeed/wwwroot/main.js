(self["webpackChunkNET6AngularSeed"] = self["webpackChunkNET6AngularSeed"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 4440:
/*!*********************************************!*\
  !*** ./ClientApp/app/app-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 936:
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/loading.service */ 5904);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie */ 8720);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _core_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/nav-list/nav-list.component */ 1210);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);












function AppComponent_mat_icon_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_mat_icon_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
class AppComponent {
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
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_cookie__WEBPACK_IMPORTED_MODULE_4__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 72, vars: 20, consts: [["id", "navBar", 1, "navbar", "navbar-default", "navbar-inverse"], [1, "container-fluid"], [1, "co_logo"], ["href", "/"], ["id", "Layer_1", "data-name", "Layer 1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 222 80", "id", "logoGraphics"], ["id", "linear-gradient", "x1", "-64.72", "y1", "-49.27", "x2", "-75.52", "y2", "-96.02", "gradientTransform", "translate(116 122)", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#a6ce39"], ["offset", "0.39", "stop-color", "#8bb13c"], ["offset", "1", "stop-color", "#0a5737"], ["id", "linear-gradient-2", "x1", "70.15", "y1", "-119.63", "x2", "70.15", "y2", "-73.65", "gradientTransform", "translate(116 122)", "gradientUnits", "userSpaceOnUse"], ["offset", "0", "stop-color", "#0095da"], ["offset", "1", "stop-color", "#002e6e"], [1, "cls-1"], ["d", "M31.78,77.15c-2.72-3.32-6-24.67.72-33.73l-.38.6c6.47-5.27,15.06-4.25,24.93-.34C41.36,46.14,54.54,65.71,31.78,77.15Z"], ["d", "M158.29,68.81C122.94,107.48,58.88,22,32,44c15.65-23.39,38-17.65,60.27-6.08C113.45,48.87,133.83,66.9,158.29,68.81Z"], ["d", "M194.15,14.71c2.72,3.32,6.08,24.67-.72,33.73l.38-.6c-6.47,5.27-15.06,4.25-24.93.34C184.57,45.67,171.39,26.15,194.15,14.71Z"], ["d", "M67.6,23c35.39-38.67,99.19,46.66,126.2,24.8-15.61,23.35-37.9,17.61-60.23,6C112.48,43,92.1,25,67.6,23Z"], ["d", "M155.91,7.18h0A13.23,13.23,0,0,1,171,17.69h0a12.76,12.76,0,0,1-8.85,15.65h0a13.23,13.23,0,0,1-15.14-10.55h0A12.76,12.76,0,0,1,155.91,7.18Z"], ["d", "M34.78,71.15c-2.72-3.32-6-24.67.72-33.73l-.38.6c6.47-5.27,15.06-4.25,24.93-.34C44.36,40.14,57.54,59.71,34.78,71.15Z", 1, "cls-2"], ["d", "M161.29,62.81C125.94,101.48,61.88,16,35,38c15.65-23.39,38-17.65,60.27-6.08C116.45,42.87,136.83,60.9,161.29,62.81Z", 1, "cls-3"], ["d", "M197.15,8.71c2.72,3.32,6.08,24.67-.72,33.73l.38-.6c-6.47,5.27-15.06,4.25-24.93.34C187.57,39.67,174.39,20.15,197.15,8.71Z", 1, "cls-4"], ["d", "M70.6,17c35.39-38.67,99.19,46.66,126.2,24.8-15.61,23.35-37.9,17.61-60.23,6C115.48,37,95.1,19,70.6,17Z", 1, "cls-5"], ["d", "M158.91,1.18h0A13.23,13.23,0,0,1,174,11.69h0a12.76,12.76,0,0,1-8.85,15.65h0a13.23,13.23,0,0,1-15.14-10.55h0A12.76,12.76,0,0,1,158.91,1.18Z", 1, "cls-5"], ["id", "logoTextGraphic", 1, "cls-6"], ["d", "M132,30.56a2.76,2.76,0,0,0-.39-1.47,2.59,2.59,0,0,0-1-1,3.18,3.18,0,0,0-1.51-.35,2.84,2.84,0,0,0-1.49.4,2.89,2.89,0,0,0-1,1,2.71,2.71,0,0,0-.38,1.36,3.36,3.36,0,0,0,.33,1.51,2.43,2.43,0,0,0,1,1,3.09,3.09,0,0,0,1.6.39,3,3,0,0,0,1.53-.39,2.71,2.71,0,0,0,1-1,3.05,3.05,0,0,0,.38-1.51ZM11.3,53.14H22.06L16.68,34.09h-.11L11.3,53.14ZM1,66,13.15,27h3.67c3.11,0,3.7.92,4.39,3.22l.36,1.18L32.15,66H25.71l-2.22-7.6H10L7.87,66Zm130.93,0V37.26h-5.58V66.05ZM94.78,49.29H82.5c0-.05,0-.29,0-.73a16.26,16.26,0,0,1,.17-1.65,11.91,11.91,0,0,1,.52-2.08,7.8,7.8,0,0,1,1.09-2,5,5,0,0,1,1.84-1.51,5.68,5.68,0,0,1,2.8-.51,5.26,5.26,0,0,1,2.53.65A5.14,5.14,0,0,1,93.14,43a7.82,7.82,0,0,1,1,2,11.84,11.84,0,0,1,.48,2c.09.64.14,1.16.16,1.58s0,.66,0,.7Zm5.64,3.88V51.52c0-.76,0-1.65-.12-2.68a23.92,23.92,0,0,0-.5-3.24,16.62,16.62,0,0,0-1.14-3.35,10.81,10.81,0,0,0-2-3,9.19,9.19,0,0,0-3.15-2.1,11.71,11.71,0,0,0-4.55-.77,13.11,13.11,0,0,0-4.69.79,10.16,10.16,0,0,0-3.36,2.07,11.54,11.54,0,0,0-2.24,2.93,16,16,0,0,0-1.34,3.36,21.74,21.74,0,0,0-.65,3.35,25.35,25.35,0,0,0-.17,2.92,21.1,21.1,0,0,0,.17,2.76,17.83,17.83,0,0,0,.67,3.19A13.44,13.44,0,0,0,78.78,61a11,11,0,0,0,2.5,2.82,11.68,11.68,0,0,0,3.81,2,17.55,17.55,0,0,0,5.39.76A20,20,0,0,0,94,66.26a15.64,15.64,0,0,0,2.6-.7,11.83,11.83,0,0,0,1.64-.74c.39-.23.62-.37.7-.43l.8-5.1-.67.51a9.7,9.7,0,0,1-1.57.88,11.88,11.88,0,0,1-2.56.8,14.87,14.87,0,0,1-3.6.27A11.74,11.74,0,0,1,87.29,61a7.29,7.29,0,0,1-2.6-1.67,6.94,6.94,0,0,1-1.44-2.09,8.53,8.53,0,0,1-.75-3.4v-.69ZM72,66.05V46.84c0-.67,0-1.39-.1-2.19a13.13,13.13,0,0,0-.45-2.4,8.73,8.73,0,0,0-1-2.33A6.59,6.59,0,0,0,68.6,38a7.21,7.21,0,0,0-2.37-1.06,10,10,0,0,0-2.53-.31,9.66,9.66,0,0,0-3,.46,9,9,0,0,0-2.27,1.11,9.57,9.57,0,0,0-1.56,1.38,8.46,8.46,0,0,0-.93,1.22,4.14,4.14,0,0,0-.36.67,5.78,5.78,0,0,0-.3-.81,7.15,7.15,0,0,0-.79-1.3A6.4,6.4,0,0,0,53.07,38a7.1,7.1,0,0,0-1.6-.8,9.3,9.3,0,0,0-1.72-.44,10.71,10.71,0,0,0-1.63-.13,9.65,9.65,0,0,0-3.15.49,7.88,7.88,0,0,0-2.26,1.2,7.09,7.09,0,0,0-1.44,1.48,5.34,5.34,0,0,0-.73,1.35v-.62a3,3,0,0,0-3.26-3.27H35V66.05h5.58V48.42a13.7,13.7,0,0,1,.28-3,6.2,6.2,0,0,1,.74-1.89,5.44,5.44,0,0,1,1-1.2,4.84,4.84,0,0,1,1.41-1A4.5,4.5,0,0,1,45.8,41a5.83,5.83,0,0,1,2.06.3,3.59,3.59,0,0,1,1.31.81,4.27,4.27,0,0,1,1,1.33,6.3,6.3,0,0,1,.53,1.82,17.51,17.51,0,0,1,.16,2.53V66.05h5.47V48.42c0-.67,0-1.36.07-2.07a7.32,7.32,0,0,1,.47-2.09,5.28,5.28,0,0,1,1.3-1.89,4.27,4.27,0,0,1,1.54-1A4.88,4.88,0,0,1,61.49,41a7,7,0,0,1,1.87.19,3.44,3.44,0,0,1,1.55.86,4.82,4.82,0,0,1,.86,1.14,3.2,3.2,0,0,1,.35.86,8.48,8.48,0,0,1,.2,1c.07.39.11.84.16,1.32s.06,1,.06,1.44V66.05Zm49.18-22.9-.79-5.26c-.27-.18-.51-.32-.7-.42a4.73,4.73,0,0,0-.56-.26l-.63-.21a8.11,8.11,0,0,0-.81-.17,6.86,6.86,0,0,0-.77,0,5.35,5.35,0,0,0-4.92,2.5,7.83,7.83,0,0,0-.67,1.12c-.15.33-.25.58-.31.75v-.83c0-2.12-.94-3.07-2.85-3.07H105.4V66.05H111V49.68c0-.5,0-1,0-1.66a12.41,12.41,0,0,1,.24-1.89,8.18,8.18,0,0,1,.67-1.93,5.64,5.64,0,0,1,1.11-1.39,5.08,5.08,0,0,1,1.56-1,5.61,5.61,0,0,1,2.06-.37,6.48,6.48,0,0,1,2.49.47A7.57,7.57,0,0,1,121.2,43.15Z"], ["d", "M219,66.05V46.73a21.23,21.23,0,0,0-.13-2.59,10.78,10.78,0,0,0-.54-2.43,8,8,0,0,0-1.22-2.19,6.3,6.3,0,0,0-2.85-2.2,11.11,11.11,0,0,0-4.15-.69,9.6,9.6,0,0,0-3.23.54,8.41,8.41,0,0,0-2.32,1.26,7.64,7.64,0,0,0-1.46,1.47,5.24,5.24,0,0,0-.68,1.16v-1c0-2.12-1.88-2.81-3.6-2.81h-2V66.05h5.63V48.31a14.58,14.58,0,0,1,.12-2,7.93,7.93,0,0,1,.54-2.11,5.44,5.44,0,0,1,1.28-1.87,5.24,5.24,0,0,1,1.65-1,5.64,5.64,0,0,1,2.19-.38,6.38,6.38,0,0,1,3,.6,3.62,3.62,0,0,1,1.57,1.57,6.16,6.16,0,0,1,.62,2.21,19.59,19.59,0,0,1,.11,2.52V66.05ZM185.74,49.29H173.46c0-.05,0-.29,0-.73a16.31,16.31,0,0,1,.17-1.65,12,12,0,0,1,.52-2.08,7.8,7.8,0,0,1,1.09-2,5,5,0,0,1,1.84-1.51,5.68,5.68,0,0,1,2.8-.51,5.26,5.26,0,0,1,2.53.65A5.14,5.14,0,0,1,184.1,43a7.81,7.81,0,0,1,1,2,11.86,11.86,0,0,1,.48,2c.09.64.14,1.16.16,1.58s0,.66,0,.7Zm5.64,3.88V51.52c0-.76,0-1.65-.11-2.68a24,24,0,0,0-.5-3.24,16.64,16.64,0,0,0-1.14-3.35,10.81,10.81,0,0,0-2-3,9.19,9.19,0,0,0-3.15-2.1,11.71,11.71,0,0,0-4.55-.77,13.11,13.11,0,0,0-4.69.79,10.17,10.17,0,0,0-3.36,2.07,11.55,11.55,0,0,0-2.24,2.93,16,16,0,0,0-1.34,3.36,21.7,21.7,0,0,0-.65,3.35,25.48,25.48,0,0,0-.17,2.92,21.14,21.14,0,0,0,.17,2.76,17.8,17.8,0,0,0,.67,3.19A13.42,13.42,0,0,0,169.74,61a11,11,0,0,0,2.5,2.82,11.68,11.68,0,0,0,3.81,2,17.55,17.55,0,0,0,5.39.76,20,20,0,0,0,3.57-.31,15.63,15.63,0,0,0,2.6-.7,11.83,11.83,0,0,0,1.64-.74c.39-.23.62-.37.7-.43l.8-5.1-.67.51a9.69,9.69,0,0,1-1.57.88,11.87,11.87,0,0,1-2.56.8,14.87,14.87,0,0,1-3.6.27,11.74,11.74,0,0,1-4.08-.71,7.29,7.29,0,0,1-2.6-1.67,7,7,0,0,1-1.44-2.09,8.53,8.53,0,0,1-.75-3.4v-.69Zm-34.21,1.18a8.15,8.15,0,0,1-.39,2.67,4.14,4.14,0,0,1-1.14,1.76,4.9,4.9,0,0,1-2,1.2,10.05,10.05,0,0,1-2.38.41c-.82,0-1.58,0-2.27,0h-5.59v-12h5.59c.89,0,1.75,0,2.59.09a9.76,9.76,0,0,1,2.36.47,4.63,4.63,0,0,1,1.86,1.18,5.09,5.09,0,0,1,1,1.77,6.8,6.8,0,0,1,.38,2.4Zm-1.42-16.57a6,6,0,0,1-.55,2.69,4.45,4.45,0,0,1-1.39,1.64A5.91,5.91,0,0,1,152,43a9.13,9.13,0,0,1-1.7.33,11.14,11.14,0,0,1-1.2.05h-5.81V32.29h5.81c.23,0,.55,0,.93,0a9.7,9.7,0,0,1,1.28.12,7,7,0,0,1,1.33.33,3.26,3.26,0,0,1,1.11.64,4.52,4.52,0,0,1,1.47,1.78,6.1,6.1,0,0,1,.48,2.6Zm8.13,16.47a10,10,0,0,0-.24-2.22,7.85,7.85,0,0,0-.79-2.13,6.87,6.87,0,0,0-1.5-1.87,8,8,0,0,0-2.55-1.57,14.09,14.09,0,0,0-2.83-.75,12.93,12.93,0,0,0,1.88-.79,10.45,10.45,0,0,0,1.72-1.09,7.22,7.22,0,0,0,1.36-1.39,9.76,9.76,0,0,0,1.1-2.53,12.16,12.16,0,0,0,.43-3.32,9.78,9.78,0,0,0-.7-3.77,8.16,8.16,0,0,0-1.83-2.74,8.31,8.31,0,0,0-2.6-1.72,13.66,13.66,0,0,0-3.78-1.07,29.7,29.7,0,0,0-4.29-.25H137V66h12.19q1.41,0,3-.08a22.57,22.57,0,0,0,3.08-.39,13.6,13.6,0,0,0,3-.94,9.16,9.16,0,0,0,2.57-1.71,9.77,9.77,0,0,0,1.94-2.69,11.43,11.43,0,0,0,1-3A16.77,16.77,0,0,0,163.87,54.25Z"], ["d", "M134,27.56a2.76,2.76,0,0,0-.39-1.47,2.59,2.59,0,0,0-1-1,3.18,3.18,0,0,0-1.51-.35,2.84,2.84,0,0,0-1.49.4,2.89,2.89,0,0,0-1,1,2.71,2.71,0,0,0-.38,1.36,3.36,3.36,0,0,0,.33,1.51,2.43,2.43,0,0,0,1,1,3.09,3.09,0,0,0,1.6.39,3,3,0,0,0,1.53-.39,2.71,2.71,0,0,0,1-1,3.05,3.05,0,0,0,.38-1.51ZM13.3,50.14H24.06L18.68,31.09h-.11L13.3,50.14ZM3,63,15.15,24h3.67c3.11,0,3.7.92,4.39,3.22l.36,1.18L34.15,63H27.71l-2.22-7.6H12L9.87,63Zm130.93,0V34.26h-5.58V63.05ZM96.78,46.29H84.5c0-.05,0-.29,0-.73a16.26,16.26,0,0,1,.17-1.65,11.91,11.91,0,0,1,.52-2.08,7.8,7.8,0,0,1,1.09-2,5,5,0,0,1,1.84-1.51,5.68,5.68,0,0,1,2.8-.51,5.26,5.26,0,0,1,2.53.65A5.14,5.14,0,0,1,95.14,40a7.82,7.82,0,0,1,1,2,11.84,11.84,0,0,1,.48,2c.09.64.14,1.16.16,1.58s0,.66,0,.7Zm5.64,3.88V48.52c0-.76,0-1.65-.12-2.68a23.92,23.92,0,0,0-.5-3.24,16.62,16.62,0,0,0-1.14-3.35,10.81,10.81,0,0,0-2-3,9.19,9.19,0,0,0-3.15-2.1,11.71,11.71,0,0,0-4.55-.77,13.11,13.11,0,0,0-4.69.79,10.16,10.16,0,0,0-3.36,2.07,11.54,11.54,0,0,0-2.24,2.93,16,16,0,0,0-1.34,3.36,21.74,21.74,0,0,0-.65,3.35,25.35,25.35,0,0,0-.17,2.92,21.1,21.1,0,0,0,.17,2.76,17.83,17.83,0,0,0,.67,3.19A13.44,13.44,0,0,0,80.78,58a11,11,0,0,0,2.5,2.82,11.68,11.68,0,0,0,3.81,2,17.55,17.55,0,0,0,5.39.76A20,20,0,0,0,96,63.26a15.64,15.64,0,0,0,2.6-.7,11.83,11.83,0,0,0,1.64-.74c.39-.23.62-.37.7-.43l.8-5.1-.67.51a9.7,9.7,0,0,1-1.57.88,11.88,11.88,0,0,1-2.56.8,14.87,14.87,0,0,1-3.6.27A11.74,11.74,0,0,1,89.29,58a7.29,7.29,0,0,1-2.6-1.67,6.94,6.94,0,0,1-1.44-2.09,8.53,8.53,0,0,1-.75-3.4v-.69ZM74,63.05V43.84c0-.67,0-1.39-.1-2.19a13.13,13.13,0,0,0-.45-2.4,8.73,8.73,0,0,0-1-2.33A6.59,6.59,0,0,0,70.6,35a7.21,7.21,0,0,0-2.37-1.06,10,10,0,0,0-2.53-.31,9.66,9.66,0,0,0-3,.46,9,9,0,0,0-2.27,1.11,9.57,9.57,0,0,0-1.56,1.38,8.46,8.46,0,0,0-.93,1.22,4.14,4.14,0,0,0-.36.67,5.78,5.78,0,0,0-.3-.81,7.15,7.15,0,0,0-.79-1.3A6.4,6.4,0,0,0,55.07,35a7.1,7.1,0,0,0-1.6-.8,9.3,9.3,0,0,0-1.72-.44,10.71,10.71,0,0,0-1.63-.13,9.65,9.65,0,0,0-3.15.49,7.88,7.88,0,0,0-2.26,1.2,7.09,7.09,0,0,0-1.44,1.48,5.34,5.34,0,0,0-.73,1.35v-.62a3,3,0,0,0-3.26-3.27H37V63.05h5.58V45.42a13.7,13.7,0,0,1,.28-3,6.2,6.2,0,0,1,.74-1.89,5.44,5.44,0,0,1,1-1.2,4.84,4.84,0,0,1,1.41-1A4.5,4.5,0,0,1,47.8,38a5.83,5.83,0,0,1,2.06.3,3.59,3.59,0,0,1,1.31.81,4.27,4.27,0,0,1,1,1.33,6.3,6.3,0,0,1,.53,1.82,17.51,17.51,0,0,1,.16,2.53V63.05h5.47V45.42c0-.67,0-1.36.07-2.07a7.32,7.32,0,0,1,.47-2.09,5.28,5.28,0,0,1,1.3-1.89,4.27,4.27,0,0,1,1.54-1A4.88,4.88,0,0,1,63.49,38a7,7,0,0,1,1.87.19,3.44,3.44,0,0,1,1.55.86,4.82,4.82,0,0,1,.86,1.14,3.2,3.2,0,0,1,.35.86,8.48,8.48,0,0,1,.2,1c.07.39.11.84.16,1.32s.06,1,.06,1.44V63.05Zm49.18-22.9-.79-5.26c-.27-.18-.51-.32-.7-.42a4.73,4.73,0,0,0-.56-.26l-.63-.21a8.11,8.11,0,0,0-.81-.17,6.86,6.86,0,0,0-.77,0,5.35,5.35,0,0,0-4.92,2.5,7.83,7.83,0,0,0-.67,1.12c-.15.33-.25.58-.31.75v-.83c0-2.12-.94-3.07-2.85-3.07H107.4V63.05H113V46.68c0-.5,0-1,0-1.66a12.41,12.41,0,0,1,.24-1.89,8.18,8.18,0,0,1,.67-1.93,5.64,5.64,0,0,1,1.11-1.39,5.08,5.08,0,0,1,1.56-1,5.61,5.61,0,0,1,2.06-.37,6.48,6.48,0,0,1,2.49.47A7.57,7.57,0,0,1,123.2,40.15Z", 1, "cls-7"], ["d", "M221,63.05V43.73a21.23,21.23,0,0,0-.13-2.59,10.78,10.78,0,0,0-.54-2.43,8,8,0,0,0-1.22-2.19,6.3,6.3,0,0,0-2.85-2.2,11.11,11.11,0,0,0-4.15-.69,9.6,9.6,0,0,0-3.23.54,8.41,8.41,0,0,0-2.32,1.26,7.64,7.64,0,0,0-1.46,1.47,5.24,5.24,0,0,0-.68,1.16v-1c0-2.12-1.88-2.81-3.6-2.81h-2V63.05h5.63V45.31a14.58,14.58,0,0,1,.12-2,7.93,7.93,0,0,1,.54-2.11,5.44,5.44,0,0,1,1.28-1.87,5.24,5.24,0,0,1,1.65-1,5.64,5.64,0,0,1,2.19-.38,6.38,6.38,0,0,1,3,.6,3.62,3.62,0,0,1,1.57,1.57,6.16,6.16,0,0,1,.62,2.21,19.59,19.59,0,0,1,.11,2.52V63.05ZM187.74,46.29H175.46c0-.05,0-.29,0-.73a16.31,16.31,0,0,1,.17-1.65,12,12,0,0,1,.52-2.08,7.8,7.8,0,0,1,1.09-2,5,5,0,0,1,1.84-1.51,5.68,5.68,0,0,1,2.8-.51,5.26,5.26,0,0,1,2.53.65A5.14,5.14,0,0,1,186.1,40a7.81,7.81,0,0,1,1,2,11.86,11.86,0,0,1,.48,2c.09.64.14,1.16.16,1.58s0,.66,0,.7Zm5.64,3.88V48.52c0-.76,0-1.65-.11-2.68a24,24,0,0,0-.5-3.24,16.64,16.64,0,0,0-1.14-3.35,10.81,10.81,0,0,0-2-3,9.19,9.19,0,0,0-3.15-2.1,11.71,11.71,0,0,0-4.55-.77,13.11,13.11,0,0,0-4.69.79,10.17,10.17,0,0,0-3.36,2.07,11.55,11.55,0,0,0-2.24,2.93,16,16,0,0,0-1.34,3.36,21.7,21.7,0,0,0-.65,3.35,25.48,25.48,0,0,0-.17,2.92,21.14,21.14,0,0,0,.17,2.76,17.8,17.8,0,0,0,.67,3.19A13.42,13.42,0,0,0,171.74,58a11,11,0,0,0,2.5,2.82,11.68,11.68,0,0,0,3.81,2,17.55,17.55,0,0,0,5.39.76,20,20,0,0,0,3.57-.31,15.63,15.63,0,0,0,2.6-.7,11.83,11.83,0,0,0,1.64-.74c.39-.23.62-.37.7-.43l.8-5.1-.67.51a9.69,9.69,0,0,1-1.57.88,11.87,11.87,0,0,1-2.56.8,14.87,14.87,0,0,1-3.6.27,11.74,11.74,0,0,1-4.08-.71,7.29,7.29,0,0,1-2.6-1.67,7,7,0,0,1-1.44-2.09,8.53,8.53,0,0,1-.75-3.4v-.69Zm-34.21,1.18a8.15,8.15,0,0,1-.39,2.67,4.14,4.14,0,0,1-1.14,1.76,4.9,4.9,0,0,1-2,1.2,10.05,10.05,0,0,1-2.38.41c-.82,0-1.58,0-2.27,0h-5.59v-12h5.59c.89,0,1.75,0,2.59.09a9.76,9.76,0,0,1,2.36.47,4.63,4.63,0,0,1,1.86,1.18,5.09,5.09,0,0,1,1,1.77,6.8,6.8,0,0,1,.38,2.4Zm-1.42-16.57a6,6,0,0,1-.55,2.69,4.45,4.45,0,0,1-1.39,1.64A5.91,5.91,0,0,1,154,40a9.13,9.13,0,0,1-1.7.33,11.14,11.14,0,0,1-1.2.05h-5.81V29.29h5.81c.23,0,.55,0,.93,0a9.7,9.7,0,0,1,1.28.12,7,7,0,0,1,1.33.33,3.26,3.26,0,0,1,1.11.64,4.52,4.52,0,0,1,1.47,1.78,6.1,6.1,0,0,1,.48,2.6Zm8.13,16.47a10,10,0,0,0-.24-2.22,7.85,7.85,0,0,0-.79-2.13,6.87,6.87,0,0,0-1.5-1.87,8,8,0,0,0-2.55-1.57,14.09,14.09,0,0,0-2.83-.75,12.93,12.93,0,0,0,1.88-.79,10.45,10.45,0,0,0,1.72-1.09,7.22,7.22,0,0,0,1.36-1.39,9.76,9.76,0,0,0,1.1-2.53,12.16,12.16,0,0,0,.43-3.32,9.78,9.78,0,0,0-.7-3.77,8.16,8.16,0,0,0-1.83-2.74,8.31,8.31,0,0,0-2.6-1.72,13.66,13.66,0,0,0-3.78-1.07,29.7,29.7,0,0,0-4.29-.25H139V63h12.19q1.41,0,3-.08a22.57,22.57,0,0,0,3.08-.39,13.6,13.6,0,0,0,3-.94,9.16,9.16,0,0,0,2.57-1.71,9.77,9.77,0,0,0,1.94-2.69,11.43,11.43,0,0,0,1-3A16.77,16.77,0,0,0,165.87,51.25Z", 1, "cls-7"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "app-container", 3, "ngClass"], [1, "row"], [1, "side-menu", 3, "ngClass"], ["id", "menu-button-top", "mat-icon-button", "", 1, "menu-collapse-button", 3, "click"], ["matTooltip", "Close Menu", "matTooltipPosition", "left", 4, "ngIf"], ["matToolTip", "Open Menu", "matTooltip", "Open Menu", "matTooltipPosition", "right", 4, "ngIf"], [3, "menuOpen"], [1, "col", "main-content"], [3, "overlapTrigger"], ["themeMenu", ""], ["cols", "2", 1, "theme-menu"], ["matTooltip", "Light Theme", "matTooltipPosition", "before", 1, "light-theme", 3, "ngClass", "click"], ["matTooltip", "Dark Theme", "matTooltipPosition", "before", 1, "dark-theme", 3, "ngClass", "click"], ["matTooltip", "Solarized Dark Theme", "matTooltipPosition", "before", 1, "solarized-dark-theme", 3, "ngClass", "click"], ["matTooltip", "Solarized Light Theme", "matTooltipPosition", "before", 1, "solarized-light-theme", 3, "ngClass", "click"], [1, "copyright"], [1, "flex-span"], ["fxFlex", ""], [1, "app-tag"], [2, "color", "white"], ["matTooltip", "Close Menu", "matTooltipPosition", "left"], ["matToolTip", "Open Menu", "matTooltip", "Open Menu", "matTooltipPosition", "right"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " .cls-1 { opacity: 0.73; } .cls-2 { fill: url(#linear-gradient); } .cls-3 { fill: #a6ce39; } .cls-4 { fill: url(#linear-gradient-2); } .cls-5 { fill: #0095da; } .cls-6 { opacity: 0.6; } .cls-7 { fill: #fff; } ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "linearGradient", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "stop", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "stop", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "stop", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "linearGradient", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "stop", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "stop", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "generic_co_logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "g", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "format_color_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_39_listener() { return ctx.menuOpen = !ctx.menuOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, AppComponent_mat_icon_40_Template, 2, 0, "mat-icon", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, AppComponent_mat_icon_41_Template, 2, 0, "mat-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "app-nav-list", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-menu", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-grid-list", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "mat-grid-tile", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_mat_grid_tile_click_48_listener() { return ctx.setThemeSetting("light-theme"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "format_color_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-grid-tile", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_mat_grid_tile_click_51_listener() { return ctx.setThemeSetting("dark-theme"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "format_color_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "mat-grid-tile", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_mat_grid_tile_click_54_listener() { return ctx.setThemeSetting("solarized-dark-theme"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "format_color_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "mat-grid-tile", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_mat_grid_tile_click_57_listener() { return ctx.setThemeSetting("solarized-light-theme"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "format_color_fill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "AmeriBen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Angular Seed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " is maintained by the Technology Service Center ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.menuOpen == true ? "open" : "closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.menuOpen == true ? "open col-1" : "closed col-0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("menuOpen", ctx.menuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("overlapTrigger", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx.activeTheme == "light-theme"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx.activeTheme == "dark-theme"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c0, ctx.activeTheme == "solarized-dark-theme"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](18, _c0, ctx.activeTheme == "solarized-light-theme"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.year, " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _core_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_1__.NavListComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__.MatMenu, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__.MatGridTile, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip], encapsulation: 2 });


/***/ }),

/***/ 8078:
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 936);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 4440);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _material_covalent_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-covalent.module */ 8051);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie */ 8720);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ 9717);
/* harmony import */ var _thing_thing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thing/thing.module */ 2291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_material_covalent_module__WEBPACK_IMPORTED_MODULE_2__.MaterialCovalentModule,
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.APP_BASE_HREF, useValue: '/' }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _material_covalent_module__WEBPACK_IMPORTED_MODULE_2__.MaterialCovalentModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrModule.forRoot({ closeButton: true, progressBar: true, onActivateTick: true }),
            ngx_cookie__WEBPACK_IMPORTED_MODULE_11__.CookieModule.forRoot(),
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
            _thing_thing_module__WEBPACK_IMPORTED_MODULE_4__.ThingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _material_covalent_module__WEBPACK_IMPORTED_MODULE_2__.MaterialCovalentModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_11__.CookieModule, _core_core_module__WEBPACK_IMPORTED_MODULE_3__.CoreModule,
        _thing_thing_module__WEBPACK_IMPORTED_MODULE_4__.ThingModule] }); })();


/***/ }),

/***/ 8962:
/*!*******************************************************!*\
  !*** ./ClientApp/app/core/base/baselist.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseList": () => (/* binding */ BaseList),
/* harmony export */   "BaseListComponent": () => (/* binding */ BaseListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var ClientApp_app_core_models_pagingparams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ClientApp/app/core/models/pagingparams */ 9950);
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/base.service */ 2245);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ClientApp_app_core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/core/services/loading.service */ 5904);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @covalent/core/dialogs */ 5866);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2238);










const _c0 = ["searchBox"];
class BaseList {
    getPagination() {
    }
    onPaginateChange(e) {
    }
    orderByFilter(o) {
    }
    add() {
    }
    edit(i) {
    }
    delete(id) {
    }
    reload() {
        this.resetPaging();
        this.getPagination();
    }
    onSearch(val) {
    }
    resetPaging() {
    }
}
class BaseListComponent {
    constructor(router, renderer, service, 
    //service: any,
    loader, toastr, dialogService, dialog) {
        this.searchValue = '';
        this.pageSize = 10;
        this.pageNumber = 1;
        this.orderBy = '';
        this.direction = 'asc';
        this.pageSizeOptions = [5, 10, 15, 25, 50, 100];
        this.pageByObject = null;
        this.filteredCollection = [];
        this.collection = [];
        this.orderBySelected = [];
        this.router = router;
        this.renderer = renderer;
        this.service = service;
        this.loader = loader;
        this.toastr = toastr;
        this.dialogService = dialogService;
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        let input = this.searchbox.nativeElement.querySelector('input');
        this.renderer.setAttribute(input, 'autocomplete', 'off'); // autocomplete is annoying
        this.getPagination();
    }
    getPagination() {
        this.loader.showLoader();
        let params = new ClientApp_app_core_models_pagingparams__WEBPACK_IMPORTED_MODULE_0__.PagingParameters();
        params.PageSize = this.pageSize;
        params.PageNumber = this.pageNumber;
        params.OrderBy = this.orderBy;
        params.Direction = this.direction;
        params.SearchValue = this.searchValue;
        params.PageByObject = this.pageByObject;
        this.service.getByPage(params).subscribe((res) => {
            this.collection = res.collection;
            this.filteredCollection = this.collection;
            this.totalCount = res.totalCount;
            this.totalPages = res.totalPages;
            this.loader.hideLoader();
        }, err => { console.error('Error', err); });
    }
    onPaginateChange(e) {
        this.pageSize = e.pageSize;
        this.pageNumber = e.pageIndex + 1;
        this.getPagination();
    }
    orderByFilter(o) {
        if (this.direction === 'asc') {
            this.direction = 'desc';
        }
        else {
            this.direction = 'asc';
        }
        this.orderBySelected = [];
        this.orderBySelected[o] = true;
        this.orderBySelected[this.direction] = true;
        this.orderBy = o;
        this.getPagination();
    }
    add() {
    }
    edit(t) {
    }
    delete(id) {
        this.dialogService.openConfirm({
            message: 'Are you sure you want to delete that?',
            disableClose: true,
            title: 'Confirm Delete',
            acceptButton: 'Yes',
            cancelButton: 'No'
        }).afterClosed().subscribe((accept) => {
            if (accept) {
                this.service.delete(id).subscribe(res => {
                    this.reload();
                }, err => { console.error(err); });
            }
        });
    }
    reload() {
        this.resetPaging();
        this.getPagination();
    }
    onSearch(val) {
        this.searchValue = val;
        this.resetPaging();
        this.getPagination();
    }
    resetPaging() {
        this.orderBySelected = [];
        this.pageNumber = 1;
        this.paginator.pageIndex = 0; // move to the first page to show latest results
    }
}
BaseListComponent.ɵfac = function BaseListComponent_Factory(t) { return new (t || BaseListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ClientApp_app_core_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_6__.TdDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
BaseListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BaseListComponent, selectors: [["app-base-comp"]], viewQuery: function BaseListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchbox = _t.first);
    } }, decls: 0, vars: 0, template: function BaseListComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 9717:
/*!*******************************************!*\
  !*** ./ClientApp/app/core/core.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _directives_debounce_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/debounce.directive */ 8937);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/loading.service */ 5904);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/http.service */ 8908);
/* harmony import */ var _nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-list/nav-list.component */ 1210);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _material_covalent_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material-covalent.module */ 8051);
/* harmony import */ var _services_thing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/thing.service */ 9350);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/safe.pipe */ 8258);
/* harmony import */ var _directives_special_character_filter_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/special-character-filter.directive */ 193);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);












class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        _services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService,
        _services_http_service__WEBPACK_IMPORTED_MODULE_2__.HttpService,
        _services_thing_service__WEBPACK_IMPORTED_MODULE_5__.ThingService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _material_covalent_module__WEBPACK_IMPORTED_MODULE_4__.MaterialCovalentModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_3__.NavListComponent, _directives_debounce_directive__WEBPACK_IMPORTED_MODULE_0__.DebounceDirective, _directives_special_character_filter_directive__WEBPACK_IMPORTED_MODULE_7__.SpecialCharacterDirective, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_6__.SafePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _material_covalent_module__WEBPACK_IMPORTED_MODULE_4__.MaterialCovalentModule], exports: [_nav_list_nav_list_component__WEBPACK_IMPORTED_MODULE_3__.NavListComponent, _directives_debounce_directive__WEBPACK_IMPORTED_MODULE_0__.DebounceDirective, _directives_special_character_filter_directive__WEBPACK_IMPORTED_MODULE_7__.SpecialCharacterDirective, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_6__.SafePipe] }); })();


/***/ }),

/***/ 8937:
/*!*************************************************************!*\
  !*** ./ClientApp/app/core/directives/debounce.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DebounceDirective": () => (/* binding */ DebounceDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4703);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2687);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);





class DebounceDirective {
    constructor(model) {
        this.model = model;
        // tslint:disable-next-line:no-output-on-prefix
        this.onDebounce = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        // tslint:disable-next-line:no-input-rename
        this.debounceTime = 75;
        // tslint:disable-next-line:no-inferrable-types
        this.isFirstChange = true;
    }
    ngOnInit() {
        this.subscription =
            this.model.valueChanges
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(this.debounceTime), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)())
                .subscribe(modelValue => {
                console.log('modelValue', modelValue);
                if (this.isFirstChange) {
                    this.isFirstChange = false;
                }
                else {
                    this.onDebounce.emit(modelValue);
                }
            });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
DebounceDirective.ɵfac = function DebounceDirective_Factory(t) { return new (t || DebounceDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControl)); };
DebounceDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DebounceDirective, selectors: [["", "ngModel", "", "onDebounce", ""]], inputs: { debounceTime: ["debounce", "debounceTime"] }, outputs: { onDebounce: "onDebounce" } });


/***/ }),

/***/ 193:
/*!*****************************************************************************!*\
  !*** ./ClientApp/app/core/directives/special-character-filter.directive.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecialCharacterDirective": () => (/* binding */ SpecialCharacterDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);


class SpecialCharacterDirective {
    constructor(el) {
        this.el = el;
        this.regexStr = '^[a-zA-Z0-9 ,.:;?\'"!)(]*$';
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onKeyPress(event) {
        return new RegExp(this.regexStr).test(event.key);
    }
    blockPaste(event) {
        this.validateFields(event);
    }
    validateFields(event) {
        setTimeout(() => {
            this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^a-zA-Z0-9 ,.:;?\'"!)(]/gi, '');
            this.ngModelChange.emit(this.el.nativeElement.value);
            event.preventDefault();
        }, 100);
    }
}
SpecialCharacterDirective.ɵfac = function SpecialCharacterDirective_Factory(t) { return new (t || SpecialCharacterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
SpecialCharacterDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SpecialCharacterDirective, selectors: [["", "appSpecialCharFilter", ""]], hostBindings: function SpecialCharacterDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function SpecialCharacterDirective_keypress_HostBindingHandler($event) { return ctx.onKeyPress($event); })("paste", function SpecialCharacterDirective_paste_HostBindingHandler($event) { return ctx.blockPaste($event); });
    } }, inputs: { isAlphaNumeric: "isAlphaNumeric" }, outputs: { ngModelChange: "ngModelChange" } });


/***/ }),

/***/ 9950:
/*!***************************************************!*\
  !*** ./ClientApp/app/core/models/pagingparams.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagingParameters": () => (/* binding */ PagingParameters)
/* harmony export */ });
class PagingParameters {
}


/***/ }),

/***/ 484:
/*!******************************************!*\
  !*** ./ClientApp/app/core/models/tag.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tag": () => (/* binding */ Tag)
/* harmony export */ });
class Tag {
}


/***/ }),

/***/ 9309:
/*!********************************************!*\
  !*** ./ClientApp/app/core/models/thing.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Thing": () => (/* binding */ Thing)
/* harmony export */ });
class Thing {
}


/***/ }),

/***/ 1210:
/*!***********************************************************!*\
  !*** ./ClientApp/app/core/nav-list/nav-list.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavListComponent": () => (/* binding */ NavListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const _c0 = function () { return ["active"]; };
const _c1 = function () { return ["thing-1"]; };
const _c2 = function () { return ["thing-2"]; };
const _c3 = function () { return ["paging"]; };
function NavListComponent_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Thing 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Thing 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Paging");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
} }
class NavListComponent {
    constructor() {
        // @Input() menuOpen: boolean;
        this.menuOpen = false;
    }
    ngOnInit() {
    }
}
NavListComponent.ɵfac = function NavListComponent_Factory(t) { return new (t || NavListComponent)(); };
NavListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavListComponent, selectors: [["app-nav-list"]], inputs: { menuOpen: "menuOpen" }, decls: 1, vars: 1, consts: [["class", "nav flex-column nav-pills", 4, "ngIf"], [1, "nav", "flex-column", "nav-pills"], ["role", "presentation", "id", "thing1", 1, "nav-item", 3, "routerLinkActive", "routerLink"], ["role", "presentation", "id", "thing2", 1, "nav-item", 3, "routerLinkActive", "routerLink"], ["role", "presentation", "id", "paging", 1, "nav-item", 3, "routerLinkActive", "routerLink"]], template: function NavListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavListComponent_ul_0_Template, 10, 12, "ul", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 8258:
/*!***********************************************!*\
  !*** ./ClientApp/app/core/pipes/safe.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 9075);


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ }),

/***/ 5953:
/*!***************************************************!*\
  !*** ./ClientApp/app/core/services/ad.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADService": () => (/* binding */ ADService)
/* harmony export */ });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ 2245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 8908);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);




class ADService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(httpService, http) {
        super(httpService);
        this.http = http;
        super.endpoint$ = 'Employee';
    }
    getEmployeeByName(name) {
        return this.httpService.getByValue(name, `AD/Search/`);
    }
    getEmployeeByUserID(uid) {
        return this.httpService.getByValue(uid, `AD/SearchByUID/`);
    }
}
ADService.ɵfac = function ADService_Factory(t) { return new (t || ADService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ADService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ADService, factory: ADService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2245:
/*!*****************************************************!*\
  !*** ./ClientApp/app/core/services/base.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.service */ 8908);


class BaseService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getById(id) {
        return this.httpService.getById(id, `${this.endpoint$}/`);
    }
    getAll() {
        return this.httpService.getAll(`${this.endpoint$}`);
    }
    getByPage(params) {
        return this.httpService.upsert(params, `${this.endpoint$}/ByPage`);
    }
    upsert(obj) {
        return this.httpService.upsert(obj, `${this.endpoint$}/Upsert`);
    }
    delete(id) {
        return this.httpService.delete(id, `${this.endpoint$}/Delete/`);
    }
}
BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_0__.HttpService)); };
BaseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BaseService, factory: BaseService.ɵfac });


/***/ }),

/***/ 8908:
/*!*****************************************************!*\
  !*** ./ClientApp/app/core/services/http.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpService": () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5730);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1565);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5894);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7540);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 795);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.service */ 5904);








class HttpService {
    constructor(http, toastrSvc, loader) {
        this.http = http;
        this.toastrSvc = toastrSvc;
        this.loader = loader;
        this.api = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.headers = {};
        this.options = {};
        this.headers = new Object({ 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json' });
        this.options = { headers: this.headers, withCredentials: true };
    }
    getByTestURL(url) {
        return this.http.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    getByValue(value, apiControllerType) {
        const url = this.buildUrl(apiControllerType, value);
        return this.http.get(url, this.options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    getAll(apiControllerType, optionalfield) {
        const url = this.buildUrl(apiControllerType, optionalfield);
        return this.http.get(url, this.options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    getById(id, apiControllerType, optionalfield) {
        if (!optionalfield) {
            optionalfield = '';
        }
        const url = this.buildUrl(apiControllerType, optionalfield);
        return this.http.get(url + id, this.options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    poll(model, polInt, apiControllerType, optionalfield) {
        if (!optionalfield) {
            optionalfield = '';
        }
        const pollinginterval = polInt;
        const url = this.buildUrl(apiControllerType, optionalfield);
        const body = JSON.stringify(model);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(pollinginterval).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => this.http.post(url, body, this.options)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    fileUpload(formData, apiControllerType, optionalfield) {
        if (!optionalfield) {
            optionalfield = '';
        }
        const url = this.buildUrl(apiControllerType, optionalfield);
        return this.http.post(url, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.retry)(2), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    post(model, apiControllerType, optionalfield) {
        const url = this.buildUrl(apiControllerType, optionalfield);
        const body = JSON.stringify(model);
        return this.http.post(url, body, this.options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    upsert(model, apiControllerType, optionalfield) {
        const url = this.buildUrl(apiControllerType, optionalfield);
        const body = JSON.stringify(model);
        return this.http.post(url, body, this.options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    delete(id, apiControllerType, optionalfield) {
        if (!optionalfield) {
            optionalfield = '';
        }
        const url = this.buildUrl(apiControllerType) + id;
        return this.http.delete(url + optionalfield, this.options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(data => { }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    // private handleError(error: HttpResponse<any>) {
    //   console.log('error', error);
    //   let errMsg: string;
    //   if (error instanceof HttpErrorResponse ) {
    //     const body = error.message || '';
    //     const err = body || JSON.stringify(body);
    //     errMsg = `${error.status} - ${error.statusText || ''}`;
    //   } else {
    //     errMsg = error.toString();
    //   }
    //   console.error(errMsg);
    //   this.showErrorLoader();
    //   this.toastrSvc.error(`An Error Occurred!: ${errMsg}`, `${error.statusText}`)
    //     .onHidden.subscribe();
    //   return throwError(errMsg);
    // }
    handleError(error) {
        console.log('err', error);
        let errMsg;
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpErrorResponse) {
            const body = error.error || '';
            const err = body || JSON.stringify(body);
            errMsg = `[HTTP ERROR ${error.status}] - ${body || ''}`;
        }
        else {
            errMsg = error.toString();
        }
        console.error(errMsg);
        this.showErrorLoader();
        this.toastrSvc.error(`${errMsg}`, `${error.statusText}`, { 'timeOut': 0 })
            .onHidden.subscribe();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(errMsg);
    }
    showErrorLoader() {
        this.loader.errorLoader();
        setTimeout(() => {
            this.loader.resolveAllError();
            this.loader.resolveAllLoading();
        }, 5000);
    }
    buildUrl(apiControllerType, optionalField) {
        const path = apiControllerType;
        const environmentPath = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        if (optionalField) {
            return environmentPath + path + optionalField;
        }
        else {
            return environmentPath + path;
        }
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService)); };
HttpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });


/***/ }),

/***/ 5904:
/*!********************************************************!*\
  !*** ./ClientApp/app/core/services/loading.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @covalent/core/loading */ 8487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class LoadingService {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.loadingService.create({
            name: 'circular-loader',
            mode: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_0__.LoadingMode.Indeterminate,
            type: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_0__.LoadingType.Circular,
            color: 'accent',
        });
        this.loadingService.create({
            name: 'linear-loader',
            mode: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_0__.LoadingMode.Indeterminate,
            type: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_0__.LoadingType.Linear,
            color: 'accent',
        });
        this.loadingService.create({
            name: 'linear-loader-error',
            mode: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_0__.LoadingMode.Indeterminate,
            type: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_0__.LoadingType.Linear,
            color: 'warn',
        });
        this.loadingService.create({
            name: 'linear-progress-loader',
            mode: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_0__.LoadingMode.Determinate,
            type: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_0__.LoadingType.Linear,
            color: 'accent'
        });
    }
    showLoader() {
        this.loadingService.register('linear-loader');
    }
    hideLoader() {
        this.loadingService.resolve('linear-loader'); // or // this.loadingService.resolveAll('circular-loader');
    }
    errorLoader() {
        this.loadingService.register('linear-loader-error');
    }
    progressLoader() {
        this.loadingService.register('linear-progress-loader');
    }
    changeProgress(value) {
        this.loadingService.setValue('linear-progress-loader', value);
    }
    hideProgressLoader() {
        this.loadingService.resolveAll('linear-progress-loader');
    }
    resolveAllLoading() {
        this.loadingService.resolveAll('linear-loader');
    }
    resolveAllError() {
        this.loadingService.resolveAll('linear-loader-error');
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_covalent_core_loading__WEBPACK_IMPORTED_MODULE_0__.TdLoadingService)); };
LoadingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 22:
/*!****************************************************!*\
  !*** ./ClientApp/app/core/services/tag.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagService": () => (/* binding */ TagService)
/* harmony export */ });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ 2245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 8908);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);




class TagService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(httpService, http) {
        super(httpService);
        this.http = http;
        this.endpoint = 'tag';
        super.endpoint$ = this.endpoint;
    }
    search(text) {
        return this.httpService.getByValue(text, `tag/search/`);
    }
}
TagService.ɵfac = function TagService_Factory(t) { return new (t || TagService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
TagService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TagService, factory: TagService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9350:
/*!******************************************************!*\
  !*** ./ClientApp/app/core/services/thing.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThingService": () => (/* binding */ ThingService)
/* harmony export */ });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ 2245);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1964);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9922);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 8908);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);






class ThingService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor(httpService, http) {
        super(httpService);
        this.http = http;
        this.testURL = 'https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1';
        this.endpoint = 'Thing';
        // testArray used for sharing between components example
        this.testArray = [1, 40, 2300];
        super.endpoint$ = 'Thing';
    }
    // Add unique http requests below
    getBacon() {
        return this.httpService.getByTestURL(this.testURL);
    }
    getHipster() {
        let url = 'http://hipsum.co/api/?type=hipster-centric&sentences=3';
        return this.httpService.getByTestURL(url);
    }
    getThings() {
        return this.http.get('api/things')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(_ => this.log('fetched things')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError('getThings', [])));
    }
    getTypes() {
        return this.httpService.getAll(`ThingType`);
    }
    sendCustomError(customErr) {
        return this.httpService.post(customErr, `ErrorMessage/CustomError`);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(result);
        };
    }
    // Log to the console
    log(message) {
        console.log(message);
    }
}
ThingService.ɵfac = function ThingService_Factory(t) { return new (t || ThingService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
ThingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ThingService, factory: ThingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8051:
/*!***************************************************!*\
  !*** ./ClientApp/app/material-covalent.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialCovalentModule": () => (/* binding */ MaterialCovalentModule)
/* harmony export */ });
/* harmony import */ var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @covalent/core/loading */ 8487);
/* harmony import */ var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @covalent/core/dialogs */ 5866);
/* harmony import */ var _covalent_core_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @covalent/core/search */ 6941);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material-moment-adapter */ 6063);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 7539);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 7441);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ 2613);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 3935);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 8341);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ 5939);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 3220);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ 2178);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button-toggle */ 2542);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ 4553);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
// import { CovalentCommonModule } from '@covalent/core/common';



// import { CovalentChipsModule } from '@covalent/core/chips';
// import { CovalentStepsModule } from '@covalent/core/steps';
// import { CovalentMediaModule } from '@covalent/core/media';























class MaterialCovalentModule {
}
MaterialCovalentModule.ɵfac = function MaterialCovalentModule_Factory(t) { return new (t || MaterialCovalentModule)(); };
MaterialCovalentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialCovalentModule });
MaterialCovalentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            // CovalentCommonModule,
            _covalent_core_loading__WEBPACK_IMPORTED_MODULE_1__.CovalentLoadingModule,
            _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_2__.CovalentDialogsModule,
            _covalent_core_search__WEBPACK_IMPORTED_MODULE_3__.CovalentSearchModule,
            // CovalentChipsModule,
            // CovalentStepsModule,
            // CovalentMediaModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridListModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule,
            _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__.MatMomentDateModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__.MatDividerModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule
        ], 
        // CovalentCommonModule,
        _covalent_core_loading__WEBPACK_IMPORTED_MODULE_1__.CovalentLoadingModule,
        _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_2__.CovalentDialogsModule,
        _covalent_core_search__WEBPACK_IMPORTED_MODULE_3__.CovalentSearchModule,
        // CovalentChipsModule,
        // CovalentStepsModule,
        // CovalentMediaModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridListModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule,
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__.MatMomentDateModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__.MatDividerModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialCovalentModule, { imports: [
        // CovalentCommonModule,
        _covalent_core_loading__WEBPACK_IMPORTED_MODULE_1__.CovalentLoadingModule,
        _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_2__.CovalentDialogsModule,
        _covalent_core_search__WEBPACK_IMPORTED_MODULE_3__.CovalentSearchModule,
        // CovalentChipsModule,
        // CovalentStepsModule,
        // CovalentMediaModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridListModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule,
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__.MatMomentDateModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__.MatDividerModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule], exports: [
        // CovalentCommonModule,
        _covalent_core_loading__WEBPACK_IMPORTED_MODULE_1__.CovalentLoadingModule,
        _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_2__.CovalentDialogsModule,
        _covalent_core_search__WEBPACK_IMPORTED_MODULE_3__.CovalentSearchModule,
        // CovalentChipsModule,
        // CovalentStepsModule,
        // CovalentMediaModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckboxModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__.MatTabsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__.MatGridListModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__.MatProgressBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule,
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_22__.MatMomentDateModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__.MatDividerModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__.MatButtonToggleModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__.MatStepperModule] }); })();


/***/ }),

/***/ 4682:
/*!***********************************************************!*\
  !*** ./ClientApp/app/thing/paging/item/item.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemComponent": () => (/* binding */ ItemComponent)
/* harmony export */ });
/* harmony import */ var _tagdialog_tagdialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../tagdialog/tagdialog.component */ 6475);
/* harmony import */ var ClientApp_app_core_models_thing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/core/models/thing */ 9309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ClientApp_app_core_services_thing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/core/services/thing.service */ 9350);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var ClientApp_app_core_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/core/services/loading.service */ 5904);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ 8341);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _core_directives_special_character_filter_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/directives/special-character-filter.directive */ 193);














function ItemComponent_form_2_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", x_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](x_r4.description);
} }
function ItemComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ItemComponent_form_2_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.thing.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ItemComponent_form_2_Template_select_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.thing.typeId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ItemComponent_form_2_option_14_Template, 2, 2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemComponent_form_2_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ItemComponent_form_2_Template_textarea_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.thing.description = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.thing.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", 20 - (ctx_r0.thing == null ? null : ctx_r0.thing.name == null ? null : ctx_r0.thing.name.length), " chars left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.thing.typeId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", _r2.untouched || _r2.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.thing.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", 50 - (ctx_r0.thing == null ? null : ctx_r0.thing.description == null ? null : ctx_r0.thing.description.length), " chars left");
} }
function ItemComponent_mat_chip_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemComponent_mat_chip_14_Template_mat_icon_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const i_r11 = restoredCtx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.removeTag(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", t_r10.description, " ");
} }
class ItemComponent {
    constructor(thingService, toastr, dialog, loader) {
        this.thingService = thingService;
        this.toastr = toastr;
        this.dialog = dialog;
        this.loader = loader;
        this.types = [];
    }
    ngOnInit() {
        this.getTypes();
        this.thingId = parseInt(localStorage.getItem('id'), 0);
        if (this.thingId !== 0) {
            this.fetch();
        }
        else {
            this.thing = new ClientApp_app_core_models_thing__WEBPACK_IMPORTED_MODULE_1__.Thing();
            this.thing.id = 0;
        }
    }
    fetch() {
        this.thingService.getById(this.thingId).subscribe((res) => {
            this.thing = res;
        }, err => console.error(err));
    }
    getTypes() {
        this.thingService.getTypes().subscribe((res) => {
            this.types = res;
        }, err => console.error(err));
    }
    save() {
        this.loader.showLoader();
        this.thingService.upsert(this.thing).subscribe((res) => {
            this.thing = res;
            this.loader.hideLoader();
        }, err => console.error(err));
    }
    removeTag(t) {
        this.toastr.warning('Not yet implemented', '');
    }
    newTagDialog() {
        let dialogRef = this.dialog.open(_tagdialog_tagdialog_component__WEBPACK_IMPORTED_MODULE_0__.TagDialogComponent, {
            data: null,
            height: '250px',
            width: '400px',
            disableClose: false
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.saved) {
                // do something with the tag
                if (result.tag != null) {
                    if (this.thing.tags == null) {
                        this.thing.tags = [];
                    }
                    this.thing.tags.push(result.tag);
                }
            }
        });
    }
}
ItemComponent.ɵfac = function ItemComponent_Factory(t) { return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ClientApp_app_core_services_thing_service__WEBPACK_IMPORTED_MODULE_2__.ThingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ClientApp_app_core_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService)); };
ItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ItemComponent, selectors: [["app-item"]], decls: 21, vars: 5, consts: [["id", "header", 1, "section-header"], ["id", "form", "autocomplete", "off", 4, "ngIf"], [1, "spacer"], [1, "row", "mt-3"], [1, "col-6"], [1, "tag-field-label"], ["mat-icon-button", "", "matTooltip", "Add Tag", 1, "tag-field-button", 3, "click"], ["color", "primary", 1, "small"], ["aria-label", "doc tags"], [4, "ngFor", "ngForOf"], ["id", "form", "autocomplete", "off"], ["form", "ngForm"], [1, "row"], [1, "form-group"], ["for", "Name"], ["type", "text", "maxlength", "25", "spellcheck", "false", "appSpecialCharFilter", "", "name", "Name", "id", "Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "small", "font-italic", "text-right"], [1, "col-3"], ["for", "Type"], ["name", "Type", "id", "Type", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "col", "align-right"], [1, "hidden"], ["id", "save-button", "type", "button", "mat-raised-button", "", "color", "accent", 1, "", 3, "disabled", "click"], [1, "col-12"], ["for", "description"], ["type", "text", "maxlength", "50", "spellcheck", "false", "appSpecialCharFilter", "", "name", "description", "id", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue"], ["color", "warn", 1, "remove-tag", 3, "click"]], template: function ItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ItemComponent_form_2_Template, 29, 7, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Tags ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ItemComponent_Template_button_click_10_listener() { return ctx.newTagDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-chip-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ItemComponent_mat_chip_14_Template, 4, 1, "mat-chip", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "thing");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.thing);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.thing == null ? null : ctx.thing.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 3, ctx.thing));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChipList, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator, _core_directives_special_character_filter_directive__WEBPACK_IMPORTED_MODULE_4__.SpecialCharacterDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__.MatChip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.JsonPipe], encapsulation: 2 });


/***/ }),

/***/ 3710:
/*!********************************************************!*\
  !*** ./ClientApp/app/thing/paging/paging.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagingComponent": () => (/* binding */ PagingComponent)
/* harmony export */ });
/* harmony import */ var ClientApp_app_core_base_baselist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ClientApp/app/core/base/baselist.component */ 8962);
/* harmony import */ var _core_models_thing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/models/thing */ 9309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _core_services_thing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/services/thing.service */ 9350);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/loading.service */ 5904);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @covalent/core/dialogs */ 5866);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _covalent_core_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @covalent/core/search */ 6941);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 9692);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8583);















function PagingComponent_tr_31_span_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PagingComponent_tr_31_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PagingComponent_tr_31_span_8_span_2_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r4 = ctx.$implicit;
    const x_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", t_r4.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (x_r2.tags == null ? null : x_r2.tags.indexOf(t_r4)) != (x_r2.tags == null ? null : x_r2.tags.length) - 1);
} }
function PagingComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagingComponent_tr_31_Template_td_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const x_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.edit(x_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagingComponent_tr_31_Template_td_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const x_r2 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.edit(x_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagingComponent_tr_31_Template_td_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const x_r2 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.edit(x_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagingComponent_tr_31_Template_td_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const x_r2 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.edit(x_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, PagingComponent_tr_31_span_8_Template, 3, 2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagingComponent_tr_31_Template_mat_icon_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const x_r2 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.edit(x_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagingComponent_tr_31_Template_mat_icon_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const x_r2 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13.delete(x_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r2 == null ? null : x_r2.type == null ? null : x_r2.type.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", x_r2 == null ? null : x_r2.tags);
} }
const _c0 = function (a0, a1, a2) { return { "selected": a0, "asc": a1, "desc": a2 }; };
class PagingComponent extends ClientApp_app_core_base_baselist_component__WEBPACK_IMPORTED_MODULE_0__.BaseListComponent {
    constructor(router, renderer, service, loader, toastr, dialogService, dialog) {
        super(router, renderer, service, loader, toastr, dialogService, dialog);
        super.direction = 'desc';
    }
    add() {
        localStorage.clear();
        let t = new _core_models_thing__WEBPACK_IMPORTED_MODULE_1__.Thing();
        t.id = 0;
        this.edit(t);
    }
    edit(t) {
        localStorage.clear();
        localStorage.setItem('id', JSON.stringify(t.id));
        this.router.navigate(['/paging/item']);
    }
}
PagingComponent.ɵfac = function PagingComponent_Factory(t) { return new (t || PagingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_thing_service__WEBPACK_IMPORTED_MODULE_2__.ThingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_7__.TdDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog)); };
PagingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PagingComponent, selectors: [["app-paging"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 32, vars: 25, consts: [[1, "row"], [1, "col-12"], ["id", "page-title"], ["color", "accent", "matTooltip", "Add", "mat-icon-button", "", "id", "add-button", 1, "pull-right", 3, "click"], [1, "md-24"], [1, "table", "table-hover"], ["colspan", "100", 1, "no-padding", "no-margin"], [1, "flex-div"], ["backIcon", "arrow_back", "autocomplete", "off", "placeholder", "Search...", 1, "flex-span", "open", 3, "alwaysVisible", "searchDebounce"], ["searchBox", ""], ["id", "paginator", 3, "length", "pageSize", "pageSizeOptions", "page"], [1, "thead-dark"], ["width", "20%", "scope", "col"], [1, "pseudo-link", 3, "ngClass", "click"], ["scope", "col", 1, "actions-cell"], ["id", "data-container"], ["class", "filtered-collection-classes", 4, "ngFor", "ngForOf"], [1, "filtered-collection-classes"], [1, "clickable-cell", 3, "click"], [4, "ngFor", "ngForOf"], [1, "actions-cell"], ["color", "primary", "matTooltip", "Edit", 1, "md-18", "edit-button", 3, "click"], ["matTooltip", "Delete", "color", "warn", 1, "md-18", "delete-button", 3, "click"], [4, "ngIf"]], template: function PagingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Thing Paging Example ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagingComponent_Template_button_click_4_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td-search-box", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("searchDebounce", function PagingComponent_Template_td_search_box_searchDebounce_12_listener($event) { return ctx.onSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-paginator", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function PagingComponent_Template_mat_paginator_page_14_listener($event) { return ctx.onPaginateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagingComponent_Template_a_click_17_listener() { return ctx.orderByFilter("Name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagingComponent_Template_a_click_20_listener() { return ctx.orderByFilter("Description"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagingComponent_Template_a_click_23_listener() { return ctx.orderByFilter("Type"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PagingComponent_Template_a_click_26_listener() { return ctx.orderByFilter("Tags"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "tbody", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, PagingComponent_tr_31_Template, 14, 4, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("alwaysVisible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx.totalCount)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](9, _c0, ctx.orderBySelected["Name"], ctx.orderBySelected["asc"], ctx.orderBySelected["desc"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](13, _c0, ctx.orderBySelected["Description"], ctx.orderBySelected["asc"], ctx.orderBySelected["desc"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](17, _c0, ctx.orderBySelected["Type"], ctx.orderBySelected["asc"], ctx.orderBySelected["desc"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](21, _c0, ctx.orderBySelected["Tags"], ctx.orderBySelected["asc"], ctx.orderBySelected["desc"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filteredCollection);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _covalent_core_search__WEBPACK_IMPORTED_MODULE_12__.TdSearchBoxComponent, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 6475:
/*!*********************************************************************!*\
  !*** ./ClientApp/app/thing/paging/tagdialog/tagdialog.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagDialogComponent": () => (/* binding */ TagDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ClientApp_app_core_models_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ClientApp/app/core/models/tag */ 484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ClientApp_app_core_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ClientApp/app/core/services/loading.service */ 5904);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var ClientApp_app_core_services_tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/core/services/tag.service */ 22);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var _core_directives_special_character_filter_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/directives/special-character-filter.directive */ 193);
/* harmony import */ var _core_directives_debounce_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/directives/debounce.directive */ 8937);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 5015);















function TagDialogComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", t_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", t_r4.description, " ");
} }
function TagDialogComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "(No existing tag found)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class TagDialogComponent {
    constructor(loader, toastr, tagService, dialogRef) {
        this.loader = loader;
        this.toastr = toastr;
        this.tagService = tagService;
        this.dialogRef = dialogRef;
        this.value = '';
        this.tagControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
        this.tags = [];
        this.searchResultEmpty = false;
    }
    ngOnInit() {
        this.tag = new ClientApp_app_core_models_tag__WEBPACK_IMPORTED_MODULE_0__.Tag();
        this.tag.id = 0;
        this.tag.description = '';
    }
    close() {
        // close without saving
        this.dialogRef.close({ saved: false });
    }
    displayWith(obj) {
        return obj ? obj.description : undefined;
    }
    selectedTag(t) {
        this.selectedTagValue = null;
        this.selectedTagValue = t.description;
        this.tag = t;
    }
    search(e) {
        var _a;
        this.searchResultEmpty = false;
        // let text = e.target.value;
        if (((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) >= 2) {
            this.tagService.search(this.value).subscribe((res) => {
                this.tags = res;
                if (this.tags.length == 0) {
                    this.searchResultEmpty = true;
                }
            }, err => console.error(err));
        }
    }
    // get existing tags or create a new tag
    save() {
        if (this.value.length > 0 || this.tag) {
            // save and close
            this.loader.showLoader();
            if (this.tag.id == 0) {
                this.tag.description = this.value;
                this.tagService.upsert(this.tag).subscribe((res) => {
                    this.tag = res;
                    this.loader.resolveAllLoading();
                    this.dialogRef.close({ 'saved': true, 'tag': this.tag });
                }, err => console.error(err));
            }
            else {
                this.loader.resolveAllLoading();
                this.dialogRef.close({ 'saved': true, 'tag': this.tag });
            }
        }
    }
}
TagDialogComponent.ɵfac = function TagDialogComponent_Factory(t) { return new (t || TagDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ClientApp_app_core_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ClientApp_app_core_services_tag_service__WEBPACK_IMPORTED_MODULE_2__.TagService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef)); };
TagDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TagDialogComponent, selectors: [["app-tagdialog"]], decls: 22, vars: 7, consts: [[1, "row"], [1, "col-12"], [1, "md-16", "align-right", "close", 3, "click"], [1, "spacer"], ["autocomplete", "off"], ["form", "ngForm"], [1, "col"], ["for", "description"], ["type", "text", "appSpecialCharFilter", "", "focus", "", "autocomplete", "off", "spellcheck", "false", "aria-label", "tag description", "id", "description", "name", "description", 1, "form-control", 3, "ngModel", "formControl", "matAutocomplete", "ngModelChange", "onDebounce", "keydown.enter"], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "small font-italic text-right", 4, "ngIf"], [1, "align-right", "col"], ["aria-hidden", "true", 2, "opacity", "0"], ["type", "button", "mat-raised-button", "", "color", "accent", 3, "disabled", "click"], [1, "md-16"], [3, "value"], [1, "small", "font-italic", "text-right"]], template: function TagDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TagDialogComponent_Template_mat_icon_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Search or Add New Tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TagDialogComponent_Template_input_ngModelChange_11_listener($event) { return ctx.value = $event; })("onDebounce", function TagDialogComponent_Template_input_onDebounce_11_listener($event) { return ctx.search($event); })("keydown.enter", function TagDialogComponent_Template_input_keydown_enter_11_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-autocomplete", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("optionSelected", function TagDialogComponent_Template_mat_autocomplete_optionSelected_12_listener($event) { return ctx.selectedTag($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TagDialogComponent_mat_option_14_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TagDialogComponent_div_15_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TagDialogComponent_Template_button_click_19_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.value)("formControl", ctx.tagControl)("matAutocomplete", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx.displayWith);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.searchResultEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocompleteTrigger, _core_directives_special_character_filter_directive__WEBPACK_IMPORTED_MODULE_3__.SpecialCharacterDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _core_directives_debounce_directive__WEBPACK_IMPORTED_MODULE_4__.DebounceDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption], encapsulation: 2 });


/***/ }),

/***/ 8150:
/*!*****************************************************!*\
  !*** ./ClientApp/app/thing/thing-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThingRoutingModule": () => (/* binding */ ThingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _thing1_thing1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thing1/thing1.component */ 11);
/* harmony import */ var _thing2_thing2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thing2/thing2.component */ 6201);
/* harmony import */ var _paging_paging_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paging/paging.component */ 3710);
/* harmony import */ var _paging_item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paging/item/item.component */ 4682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);







const routes = [
    { path: 'thing-1', component: _thing1_thing1_component__WEBPACK_IMPORTED_MODULE_0__.Thing1Component },
    { path: 'thing-2', component: _thing2_thing2_component__WEBPACK_IMPORTED_MODULE_1__.Thing2Component },
    { path: 'paging', component: _paging_paging_component__WEBPACK_IMPORTED_MODULE_2__.PagingComponent },
    { path: 'paging/item', component: _paging_item_item_component__WEBPACK_IMPORTED_MODULE_3__.ItemComponent },
    { path: '', redirectTo: 'thing-1', pathMatch: 'full' },
];
class ThingRoutingModule {
}
ThingRoutingModule.components = [_thing1_thing1_component__WEBPACK_IMPORTED_MODULE_0__.Thing1Component, _thing2_thing2_component__WEBPACK_IMPORTED_MODULE_1__.Thing2Component, _paging_paging_component__WEBPACK_IMPORTED_MODULE_2__.PagingComponent];
ThingRoutingModule.ɵfac = function ThingRoutingModule_Factory(t) { return new (t || ThingRoutingModule)(); };
ThingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ThingRoutingModule });
ThingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ThingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 2291:
/*!*********************************************!*\
  !*** ./ClientApp/app/thing/thing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThingModule": () => (/* binding */ ThingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _thing1_thing1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./thing1/thing1.component */ 11);
/* harmony import */ var _thing2_thing2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thing2/thing2.component */ 6201);
/* harmony import */ var _thing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thing-routing.module */ 8150);
/* harmony import */ var _thing1_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thing1/dialog/dialog.component */ 6252);
/* harmony import */ var _material_covalent_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../material-covalent.module */ 8051);
/* harmony import */ var _paging_paging_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paging/paging.component */ 3710);
/* harmony import */ var _paging_item_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paging/item/item.component */ 4682);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/core.module */ 9717);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _paging_tagdialog_tagdialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paging/tagdialog/tagdialog.component */ 6475);
/* harmony import */ var _thing2_hipsteripsum_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thing2/hipsteripsum.component */ 5822);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-dragula */ 8989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);















class ThingModule {
}
ThingModule.ɵfac = function ThingModule_Factory(t) { return new (t || ThingModule)(); };
ThingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ThingModule });
ThingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _core_core_module__WEBPACK_IMPORTED_MODULE_7__.CoreModule, _thing_routing_module__WEBPACK_IMPORTED_MODULE_2__.ThingRoutingModule, _material_covalent_module__WEBPACK_IMPORTED_MODULE_4__.MaterialCovalentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_13__.DragulaModule.forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ThingModule, { declarations: [_thing1_thing1_component__WEBPACK_IMPORTED_MODULE_0__.Thing1Component, _thing2_thing2_component__WEBPACK_IMPORTED_MODULE_1__.Thing2Component, _thing2_hipsteripsum_component__WEBPACK_IMPORTED_MODULE_9__.HipsterIpsumComponent, _thing1_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__.DialogComponent, _paging_paging_component__WEBPACK_IMPORTED_MODULE_5__.PagingComponent, _paging_item_item_component__WEBPACK_IMPORTED_MODULE_6__.ItemComponent, _paging_tagdialog_tagdialog_component__WEBPACK_IMPORTED_MODULE_8__.TagDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _core_core_module__WEBPACK_IMPORTED_MODULE_7__.CoreModule, _thing_routing_module__WEBPACK_IMPORTED_MODULE_2__.ThingRoutingModule, _material_covalent_module__WEBPACK_IMPORTED_MODULE_4__.MaterialCovalentModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, ng2_dragula__WEBPACK_IMPORTED_MODULE_13__.DragulaModule] }); })();


/***/ }),

/***/ 6252:
/*!***************************************************************!*\
  !*** ./ClientApp/app/thing/thing1/dialog/dialog.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogComponent": () => (/* binding */ DialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/loading.service */ 5904);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);








class DialogComponent {
    constructor(loader, dialogRef, data) {
        this.loader = loader;
        this.dialogRef = dialogRef;
        this.data = data;
        this.message = '';
    }
    ngOnInit() {
        this.message = this.data;
    }
    close() {
        // close without saving
        this.dialogRef.close({ saved: false });
    }
    save() {
        // save and close
        this.dialogRef.close({ saved: true });
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
DialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog"]], decls: 18, vars: 3, consts: [[1, "row"], [1, "col-12"], [1, "md-16", "align-right", "close", 3, "click"], [2, "opacity", "0"], ["form", "ngForm"], [1, "form-group"], [1, "align-right"], ["type", "button", "mat-raised-button", "", "color", "accent", 3, "click"], [1, "md-16"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Dialog Header ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogComponent_Template_mat_icon_click_4_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_15_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 1, ctx.message), " ");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.JsonPipe], encapsulation: 2 });


/***/ }),

/***/ 11:
/*!********************************************************!*\
  !*** ./ClientApp/app/thing/thing1/thing1.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Thing1Component": () => (/* binding */ Thing1Component)
/* harmony export */ });
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog/dialog.component */ 6252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/loading.service */ 5904);
/* harmony import */ var ClientApp_app_core_services_ad_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ClientApp/app/core/services/ad.service */ 5953);
/* harmony import */ var ClientApp_app_core_services_thing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ClientApp/app/core/services/thing.service */ 9350);
/* harmony import */ var _core_directives_special_character_filter_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/directives/special-character-filter.directive */ 193);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 1769);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 1554);
/* harmony import */ var _core_directives_debounce_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/directives/debounce.directive */ 8937);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 1436);




















function Thing1Component_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Thing1Component_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.showLoader(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "refresh");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Show Loader ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function Thing1Component_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Thing1Component_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.hideLoader(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Resolve Loader ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function Thing1Component_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Thing1Component_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r11.triggerError(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Trigger Error ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function Thing1Component_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Thing1Component_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.resolveError(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "stop");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Resolve Error ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function Thing1Component_mat_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", e_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", e_r15.fullName, " ");
} }
function Thing1Component_button_47_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Thing1Component_button_47_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r16.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class Thing1Component {
    constructor(dialog, 
    // private dialogService: TdDialogService,
    toastrService, loader, adService, formBuilder, thingService) {
        this.dialog = dialog;
        this.toastrService = toastrService;
        this.loader = loader;
        this.adService = adService;
        this.formBuilder = formBuilder;
        this.thingService = thingService;
        this.loading = false;
        this.erroring = false;
        this.message = '';
        this.filteredEmployees = [];
        this.customErrorMessage = '';
    }
    ngOnInit() {
        this.employeeFormGroup = this.formBuilder.group({
            employeeCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [RequireMatch])
        });
    }
    openDialog() {
        let dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_0__.DialogComponent, {
            data: { data: this.message },
            height: '400px',
            width: '600px',
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('result', result);
            if (result.saved) {
                this.toastrService.info('Saved: ' + result.saved, 'Dialog response');
            }
            else {
                this.toastrService.warning('Not saved', 'Dialog response');
            }
        });
    }
    showLoader() {
        this.loader.showLoader();
        this.loading = true;
    }
    hideLoader() {
        this.loader.hideLoader();
        this.loader.resolveAllLoading();
        this.loading = false;
        this.toastrService.info('Loading has finished', 'A Title');
    }
    triggerError() {
        this.erroring = true;
        this.toastrService.error('Some meaningful message', 'This is an error!');
        this.loader.errorLoader();
    }
    resolveError() {
        this.loader.resolveAllError();
        this.toastrService.clear();
        this.erroring = false;
    }
    // Employee Autocomplete
    displayWith(obj) {
        return obj ? obj.fullName : undefined;
    }
    searchEmployees(name) {
        console.log('searching');
        if ((name === null || name === void 0 ? void 0 : name.length) > 2) {
            this.adService.getEmployeeByName(name).subscribe((res) => {
                this.filteredEmployees = res;
            }, err => console.error(err));
        }
    }
    selectedEmployee(e) {
        console.log('selectedEmployeeName', this.selectedEmployeeName);
        this.selectedEmployeeName = e.fullName;
    }
    clear() {
        this.selectedEmployeeName = null;
        this.filteredEmployees = [];
        this.employee = null;
    }
    raiseError() {
        this.thingService.sendCustomError(this.customErrorMessage).subscribe(res => {
            console.log('custom error response', res);
        }, err => console.error(err));
    }
}
Thing1Component.ɵfac = function Thing1Component_Factory(t) { return new (t || Thing1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ClientApp_app_core_services_ad_service__WEBPACK_IMPORTED_MODULE_2__.ADService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ClientApp_app_core_services_thing_service__WEBPACK_IMPORTED_MODULE_3__.ThingService)); };
Thing1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: Thing1Component, selectors: [["app-thing1"]], decls: 48, vars: 13, consts: [["id", "header", 1, "section-header"], [1, "row"], [1, "col-12"], [1, "col-4"], [1, "form-group"], ["for", ""], ["type", "text", "appSpecialCharFilter", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "mt-5", "mb-5"], [1, "row", "mb-5"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "ml-2", "mat-raised-button", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "col-6", "pt-3"], ["for", "CustomError"], [1, "input-group"], ["type", "text", "maxlength", "500", "spellcheck", "false", "appSpecialCharFilter", "", "name", "customError", "id", "customError", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "error-button", "type", "button", "mat-button", "", "color", "warn", 3, "disabled", "click"], [1, "small", "font-italic", "text-left"], [1, "mt-5"], ["mat-raised-button", "", "color", "primary", "href", "http://apps.dev.ameriben.com/appmanager/#/logs/live", "target", "_blank", 2, "text-decoration", "none"], [1, "row", "mt-5"], [1, "col-6"], [1, "employee-search"], [3, "formGroup"], ["type", "text", "formControlName", "employeeCtrl", "autocomplete", "off", "spellcheck", "false", "placeholder", "Employee", "matInput", "", 3, "ngModel", "matAutocomplete", "ngModelChange", "onDebounce"], [3, "displayWith", "optionSelected"], ["auto1", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Clear Results", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "warn", 1, "ml-2", 3, "click"], [3, "value"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Clear Results", 3, "click"]], template: function Thing1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Thing 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function Thing1Component_Template_input_ngModelChange_9_listener($event) { return ctx.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Thing1Component_Template_button_click_10_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "open_in_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Open Dialog ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, Thing1Component_button_18_Template, 4, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, Thing1Component_button_19_Template, 4, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, Thing1Component_button_20_Template, 4, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, Thing1Component_button_21_Template, 4, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Enter custom error message");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function Thing1Component_Template_input_ngModelChange_27_listener($event) { return ctx.customErrorMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function Thing1Component_Template_button_click_28_listener() { return ctx.raiseError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "View AppManager Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Active Directory Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "form", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function Thing1Component_Template_input_ngModelChange_43_listener($event) { return ctx.employee = $event; })("onDebounce", function Thing1Component_Template_input_onDebounce_43_listener($event) { return ctx.searchEmployees($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-autocomplete", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("optionSelected", function Thing1Component_Template_mat_autocomplete_optionSelected_44_listener($event) { return ctx.selectedEmployee($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, Thing1Component_mat_option_46_Template, 2, 2, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, Thing1Component_button_47_Template, 3, 0, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.erroring);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.erroring);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.customErrorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", 500 - (ctx.customErrorMessage == null ? null : ctx.customErrorMessage.length), " chars left");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.employeeFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.employee)("matAutocomplete", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx.displayWith);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.filteredEmployees);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.filteredEmployees == null ? null : ctx.filteredEmployees.length) > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _core_directives_special_character_filter_directive__WEBPACK_IMPORTED_MODULE_4__.SpecialCharacterDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _core_directives_debounce_directive__WEBPACK_IMPORTED_MODULE_5__.DebounceDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltip], encapsulation: 2 });
function RequireMatch(control) {
    const selection = control.value;
    if (typeof selection === 'string') {
        return { incorrect: true };
    }
    return null;
}


/***/ }),

/***/ 5822:
/*!**************************************************************!*\
  !*** ./ClientApp/app/thing/thing2/hipsteripsum.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HipsterIpsumComponent": () => (/* binding */ HipsterIpsumComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_services_thing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/services/thing.service */ 9350);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/loading.service */ 5904);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);








function HipsterIpsumComponent_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rows of Hipster: ", ctx_r0.ipsums.length, "");
} }
function HipsterIpsumComponent_div_14_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](b_r3);
} }
function HipsterIpsumComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HipsterIpsumComponent_div_14_p_1_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.ipsums);
} }
class HipsterIpsumComponent {
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
}
HipsterIpsumComponent.ɵfac = function HipsterIpsumComponent_Factory(t) { return new (t || HipsterIpsumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_thing_service__WEBPACK_IMPORTED_MODULE_0__.ThingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); };
HipsterIpsumComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HipsterIpsumComponent, selectors: [["app-hipster-ipsum"]], decls: 19, vars: 3, consts: [[1, "row", "mr-0", "ml-0", "pt-3"], [1, "col"], [1, "form-group"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "col-2", "align-right"], [4, "ngIf"], [1, "spacer"], ["class", "col", 4, "ngIf"], [1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"]], template: function HipsterIpsumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "The Hipster Ipsum JSON API is a REST interface for generating meaty lorem ipsum text and can be used by any application.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HipsterIpsumComponent_Template_button_click_5_listener() { return ctx.fetchHipster(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "directions_run");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Fetch Hipster ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HipsterIpsumComponent_label_10_Template, 2, 1, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HipsterIpsumComponent_div_14_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Sharing between components with a service");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HipsterIpsumComponent_Template_textarea_ngModelChange_18_listener($event) { return ctx.service.testArray = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ipsums.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ipsums);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.service.testArray);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 6201:
/*!********************************************************!*\
  !*** ./ClientApp/app/thing/thing2/thing2.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Thing2Component": () => (/* binding */ Thing2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_services_thing_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../core/services/thing.service */ 9350);
/* harmony import */ var _core_services_loading_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/services/loading.service */ 5904);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 9344);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 5939);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _hipsteripsum_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hipsteripsum.component */ 5822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-dragula */ 8989);











function Thing2Component_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Strips of Bacon: ", ctx_r0.bacons.length, "");
} }
function Thing2Component_div_20_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](b_r3);
} }
function Thing2Component_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Thing2Component_div_20_p_1_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.bacons);
} }
class Thing2Component {
    constructor(service, loader, toastrService) {
        this.service = service;
        this.loader = loader;
        this.toastrService = toastrService;
        this.bacons = [];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.pollingSubscription) {
            this.pollingSubscription.unsubscribe();
        }
    }
    fetchBacon() {
        this.loader.showLoader();
        this.service.getBacon().subscribe((res) => {
            console.log('res is ', res);
            res.forEach(e => {
                this.bacons.push(e);
            });
            this.loader.hideLoader();
        }, err => { console.error('error!', err); this.loader.errorLoader(); });
    }
}
Thing2Component.ɵfac = function Thing2Component_Factory(t) { return new (t || Thing2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_thing_service__WEBPACK_IMPORTED_MODULE_0__.ThingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_loading_service__WEBPACK_IMPORTED_MODULE_1__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService)); };
Thing2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Thing2Component, selectors: [["app-thing2"]], decls: 45, vars: 3, consts: [["id", "header", 1, "section-header"], [1, "row"], [1, "col"], ["animationDuration", "0"], ["label", "Bacon Ipsum"], [1, "row", "mr-0", "ml-0", "pt-3"], [1, "form-group"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "col-2", "align-right"], [4, "ngIf"], [1, "spacer"], [1, "row", "m-0", "pt-3"], ["class", "col", 4, "ngIf"], ["label", "Hipster Ipsum"], ["label", "Third"], [1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "mr-0", "ml-0", "pt-1"], ["dragula", "VAMPIRES", 1, "example-dragula-list", "flex"], [1, "example-dragula-list-item"], [4, "ngFor", "ngForOf"]], template: function Thing2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Thing 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-tab-group", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "The Bacon Ipsum JSON API is a REST interface for generating meaty lorem ipsum text and can be used by any application.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Thing2Component_Template_button_click_11_listener() { return ctx.fetchBacon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "directions_run");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Fetch Bacon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, Thing2Component_label_16_Template, 2, 1, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, Thing2Component_div_20_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-tab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "app-hipster-ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Sharing between components with a service");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Thing2Component_Template_textarea_ngModelChange_28_listener($event) { return ctx.service.testArray = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Dragula (Drag and Drop) Example: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Dracula");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Kurz");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Vladislav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Deacon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bacons.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bacons);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.service.testArray);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTab, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _hipsteripsum_component__WEBPACK_IMPORTED_MODULE_2__.HipsterIpsumComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, ng2_dragula__WEBPACK_IMPORTED_MODULE_10__.DragulaDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], encapsulation: 2 });


/***/ }),

/***/ 5730:
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //api: 'http://localhost:4200/api/' //-- PROXY to https://localhost:44398
    api: 'http://localhost:14143/api/' //-- IIS Express :-(
    // api: 'https://localhost:44398/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8147:
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8078);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5730);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 6431,
	"./af.js": 6431,
	"./ar": 1286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 3160,
	"./ar-ly.js": 3160,
	"./ar-ma": 2551,
	"./ar-ma.js": 2551,
	"./ar-sa": 9989,
	"./ar-sa.js": 9989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 1286,
	"./az": 5887,
	"./az.js": 5887,
	"./be": 4572,
	"./be.js": 4572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 3344,
	"./bm.js": 3344,
	"./bn": 8985,
	"./bn-bd": 3990,
	"./bn-bd.js": 3990,
	"./bn.js": 8985,
	"./bo": 4391,
	"./bo.js": 4391,
	"./br": 6728,
	"./br.js": 6728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 1043,
	"./ca.js": 1043,
	"./cs": 420,
	"./cs.js": 420,
	"./cv": 3513,
	"./cv.js": 3513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 7978,
	"./da.js": 7978,
	"./de": 6061,
	"./de-at": 5204,
	"./de-at.js": 5204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 6061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 5724,
	"./en-au.js": 5724,
	"./en-ca": 525,
	"./en-ca.js": 525,
	"./en-gb": 2847,
	"./en-gb.js": 2847,
	"./en-ie": 7216,
	"./en-ie.js": 7216,
	"./en-il": 9305,
	"./en-il.js": 9305,
	"./en-in": 3364,
	"./en-in.js": 3364,
	"./en-nz": 9130,
	"./en-nz.js": 9130,
	"./en-sg": 1161,
	"./en-sg.js": 1161,
	"./eo": 802,
	"./eo.js": 802,
	"./es": 328,
	"./es-do": 5551,
	"./es-do.js": 5551,
	"./es-mx": 5615,
	"./es-mx.js": 5615,
	"./es-us": 4790,
	"./es-us.js": 4790,
	"./es.js": 328,
	"./et": 6389,
	"./et.js": 6389,
	"./eu": 2961,
	"./eu.js": 2961,
	"./fa": 6151,
	"./fa.js": 6151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 8898,
	"./fil.js": 8898,
	"./fo": 7779,
	"./fo.js": 7779,
	"./fr": 8174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 8867,
	"./fr-ch.js": 8867,
	"./fr.js": 8174,
	"./fy": 452,
	"./fy.js": 452,
	"./ga": 5014,
	"./ga.js": 5014,
	"./gd": 4127,
	"./gd.js": 4127,
	"./gl": 2124,
	"./gl.js": 2124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 7953,
	"./gom-latn.js": 7953,
	"./gu": 6604,
	"./gu.js": 6604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 4235,
	"./hi.js": 4235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 7735,
	"./hu.js": 7735,
	"./hy-am": 402,
	"./hy-am.js": 402,
	"./id": 9187,
	"./id.js": 9187,
	"./is": 536,
	"./is.js": 536,
	"./it": 5007,
	"./it-ch": 4667,
	"./it-ch.js": 4667,
	"./it.js": 5007,
	"./ja": 2093,
	"./ja.js": 2093,
	"./jv": 59,
	"./jv.js": 59,
	"./ka": 6870,
	"./ka.js": 6870,
	"./kk": 880,
	"./kk.js": 880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 8785,
	"./kn.js": 8785,
	"./ko": 1721,
	"./ko.js": 1721,
	"./ku": 7851,
	"./ku.js": 7851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 1670,
	"./lb.js": 1670,
	"./lo": 3002,
	"./lo.js": 3002,
	"./lt": 4035,
	"./lt.js": 4035,
	"./lv": 6927,
	"./lv.js": 6927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 4173,
	"./mi.js": 4173,
	"./mk": 6320,
	"./mk.js": 6320,
	"./ml": 1705,
	"./ml.js": 1705,
	"./mn": 1062,
	"./mn.js": 1062,
	"./mr": 2805,
	"./mr.js": 2805,
	"./ms": 1341,
	"./ms-my": 9900,
	"./ms-my.js": 9900,
	"./ms.js": 1341,
	"./mt": 7734,
	"./mt.js": 7734,
	"./my": 9034,
	"./my.js": 9034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 6495,
	"./ne.js": 6495,
	"./nl": 673,
	"./nl-be": 6272,
	"./nl-be.js": 6272,
	"./nl.js": 673,
	"./nn": 2486,
	"./nn.js": 2486,
	"./oc-lnc": 6219,
	"./oc-lnc.js": 6219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 8444,
	"./pl.js": 8444,
	"./pt": 3170,
	"./pt-br": 6117,
	"./pt-br.js": 6117,
	"./pt.js": 3170,
	"./ro": 6587,
	"./ro.js": 6587,
	"./ru": 9264,
	"./ru.js": 9264,
	"./sd": 2135,
	"./sd.js": 2135,
	"./se": 5366,
	"./se.js": 5366,
	"./si": 3379,
	"./si.js": 3379,
	"./sk": 6143,
	"./sk.js": 6143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 1082,
	"./sq.js": 1082,
	"./sr": 1621,
	"./sr-cyrl": 8963,
	"./sr-cyrl.js": 8963,
	"./sr.js": 1621,
	"./ss": 1404,
	"./ss.js": 1404,
	"./sv": 5685,
	"./sv.js": 5685,
	"./sw": 6490,
	"./sw.js": 6490,
	"./ta": 4106,
	"./ta.js": 4106,
	"./te": 9204,
	"./te.js": 9204,
	"./tet": 3692,
	"./tet.js": 3692,
	"./tg": 6361,
	"./tg.js": 6361,
	"./th": 1735,
	"./th.js": 1735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 6129,
	"./tl-ph.js": 6129,
	"./tlh": 3759,
	"./tlh.js": 3759,
	"./tr": 1644,
	"./tr.js": 1644,
	"./tzl": 875,
	"./tzl.js": 875,
	"./tzm": 6878,
	"./tzm-latn": 1041,
	"./tzm-latn.js": 1041,
	"./tzm.js": 6878,
	"./ug-cn": 4357,
	"./ug-cn.js": 4357,
	"./uk": 4810,
	"./uk.js": 4810,
	"./ur": 6794,
	"./ur.js": 6794,
	"./uz": 8966,
	"./uz-latn": 7959,
	"./uz-latn.js": 7959,
	"./uz.js": 8966,
	"./vi": 5386,
	"./vi.js": 5386,
	"./x-pseudo": 3156,
	"./x-pseudo.js": 3156,
	"./yo": 8028,
	"./yo.js": 8028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 9380,
	"./zh-hk.js": 9380,
	"./zh-mo": 874,
	"./zh-mo.js": 874,
	"./zh-tw": 6508,
	"./zh-tw.js": 6508
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8147)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map