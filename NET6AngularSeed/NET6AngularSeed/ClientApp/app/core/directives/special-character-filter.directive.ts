import { Directive, HostListener, ElementRef, Input, Output, EventEmitter } from '@angular/core';
@Directive({
  selector: '[appSpecialCharFilter]'
})
export class SpecialCharacterDirective {

  regexStr = '^[a-zA-Z0-9 ,.:;?\'"!)(]*$';
  @Input() isAlphaNumeric: boolean;
  @Output() ngModelChange = new EventEmitter();

  constructor(private el: ElementRef) { }

  @HostListener('keypress', ['$event']) onKeyPress(event) {
    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
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
