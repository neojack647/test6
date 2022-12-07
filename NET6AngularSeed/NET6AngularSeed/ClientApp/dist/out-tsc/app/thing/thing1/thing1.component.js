import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { FormControl } from '@angular/forms';
let Thing1Component = class Thing1Component {
    constructor(dialog, 
    // private dialogService: TdDialogService,
    toastrService, loader, adService, formBuilder) {
        this.dialog = dialog;
        this.toastrService = toastrService;
        this.loader = loader;
        this.adService = adService;
        this.formBuilder = formBuilder;
        this.loading = false;
        this.erroring = false;
        this.message = '';
        this.filteredEmployees = [];
    }
    ngOnInit() {
        this.employeeFormGroup = this.formBuilder.group({
            employeeCtrl: new FormControl('', [RequireMatch])
        });
    }
    openDialog() {
        let dialogRef = this.dialog.open(DialogComponent, {
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
};
Thing1Component = __decorate([
    Component({
        selector: 'app-thing1',
        templateUrl: './thing1.component.html',
    })
], Thing1Component);
export { Thing1Component };
function RequireMatch(control) {
    const selection = control.value;
    if (typeof selection === 'string') {
        return { incorrect: true };
    }
    return null;
}
//# sourceMappingURL=thing1.component.js.map