import { Directive, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { NgControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngModel][onDebounce]',
})
export class DebounceDirective implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  public onDebounce = new EventEmitter<any>();

  // tslint:disable-next-line:no-input-rename
  @Input('debounce')
  // tslint:disable-next-line:no-inferrable-types
  public debounceTime: number = 75;

  // tslint:disable-next-line:no-inferrable-types
  private isFirstChange: boolean = true;
  private subscription: Subscription;

  constructor(public model: NgControl) {
  }

  ngOnInit() {
    this.subscription =
      this.model.valueChanges
        .pipe(
            debounceTime(this.debounceTime),
            distinctUntilChanged())
            .subscribe( modelValue => {
                console.log('modelValue', modelValue);
                if (this.isFirstChange) {
                    this.isFirstChange = false;
                } else {
                    this.onDebounce.emit(modelValue);
                }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
