import { __decorate } from "tslib";
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
let DebounceDirective = class DebounceDirective {
    constructor(model) {
        this.model = model;
        // tslint:disable-next-line:no-output-on-prefix
        this.onDebounce = new EventEmitter();
        // tslint:disable-next-line:no-input-rename
        this.debounceTime = 75;
        // tslint:disable-next-line:no-inferrable-types
        this.isFirstChange = true;
    }
    ngOnInit() {
        this.subscription =
            this.model.valueChanges
                .pipe(debounceTime(this.debounceTime), distinctUntilChanged())
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
};
__decorate([
    Output()
], DebounceDirective.prototype, "onDebounce", void 0);
__decorate([
    Input('debounce')
], DebounceDirective.prototype, "debounceTime", void 0);
DebounceDirective = __decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: '[ngModel][onDebounce]',
    })
], DebounceDirective);
export { DebounceDirective };
//# sourceMappingURL=debounce.directive.js.map