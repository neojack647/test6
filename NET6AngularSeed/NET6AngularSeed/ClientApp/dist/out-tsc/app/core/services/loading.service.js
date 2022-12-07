import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { LoadingMode, LoadingType } from '@covalent/core/loading';
let LoadingService = class LoadingService {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.loadingService.create({
            name: 'circular-loader',
            mode: LoadingMode.Indeterminate,
            type: LoadingType.Circular,
            color: 'accent',
        });
        this.loadingService.create({
            name: 'linear-loader',
            mode: LoadingMode.Indeterminate,
            type: LoadingType.Linear,
            color: 'accent',
        });
        this.loadingService.create({
            name: 'linear-loader-error',
            mode: LoadingMode.Indeterminate,
            type: LoadingType.Linear,
            color: 'warn',
        });
        this.loadingService.create({
            name: 'linear-progress-loader',
            mode: LoadingMode.Determinate,
            type: LoadingType.Linear,
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
};
LoadingService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoadingService);
export { LoadingService };
//# sourceMappingURL=loading.service.js.map