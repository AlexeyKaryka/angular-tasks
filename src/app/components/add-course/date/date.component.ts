import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
   selector: 'app-date',
   templateUrl: './date.component.html',
   styleUrls: ['./date.component.styl'],
   providers: [
      {
         provide: NG_VALUE_ACCESSOR,
         useExisting: forwardRef(() => DateComponent),
         multi: true
      },
      {
         provide: NG_VALIDATORS,
         useExisting: DateComponent,
         multi: true
      }
   ]
})
export class DateComponent implements OnInit, ControlValueAccessor, Validator {

   public dateValue: string;
   private dateRegexp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}$/;

   constructor() { }

   ngOnInit() {
   }

   validate(control: AbstractControl): ValidationErrors | null {
      if (!control.value || !this.dateRegexp.test(control.value)) {
         return {
            valid: false
         };
      }
      return null;
   }

   writeValue(value: string) {
      this.dateValue = value;
   }

   onChange: any = (value) => {};

   registerOnChange(onChangeCallback) {
      this.onChange = onChangeCallback;
   }

   registerOnTouched() {
   }

}
