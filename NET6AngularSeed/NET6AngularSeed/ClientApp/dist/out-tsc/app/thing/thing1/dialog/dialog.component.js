import { __decorate, __param } from "tslib";
import { Inject, Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let DialogComponent = class DialogComponent {
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
};
DialogComponent = __decorate([
    Component({
        selector: 'app-dialog',
        templateUrl: './dialog.component.html'
    }),
    __param(2, Inject(MAT_DIALOG_DATA))
], DialogComponent);
export { DialogComponent };
//# sourceMappingURL=dialog.component.js.map