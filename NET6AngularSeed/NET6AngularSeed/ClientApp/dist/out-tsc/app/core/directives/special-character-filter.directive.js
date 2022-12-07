import { __decorate } from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
let SpecialCharacterDirective = class SpecialCharacterDirective {
    constructor(el) {
        this.el = el;
        this.regexStr = '^[a-zA-Z0-9 ,.:;?\'"!)(]*$';
        this.ngModelChange = new EventEmitter();
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
};
__decorate([
    Input()
], SpecialCharacterDirective.prototype, "isAlphaNumeric", void 0);
__decorate([
    Output()
], SpecialCharacterDirective.prototype, "ngModelChange", void 0);
__decorate([
    HostListener('keypress', ['$event'])
], SpecialCharacterDirective.prototype, "onKeyPress", null);
__decorate([
    HostListener('paste', ['$event'])
], SpecialCharacterDirective.prototype, "blockPaste", null);
SpecialCharacterDirective = __decorate([
    Directive({
        selector: '[appSpecialCharFilter]'
    })
], SpecialCharacterDirective);
export { SpecialCharacterDirective };
//# sourceMappingURL=special-character-filter.directive.js.map