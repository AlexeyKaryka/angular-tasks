import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl, ValidationErrors, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.styl'],
  providers: [
   {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationComponent),
      multi: true
   },
   {
      provide: NG_VALIDATORS,
      useExisting: DurationComponent,
      multi: true
   }
]
})
export class DurationComponent implements OnInit {

   public durationInMinutes: string;

   constructor() { }

   ngOnInit() {
   }

   validate(control: AbstractControl): ValidationErrors | null {
      if (!control.value || !Number.isInteger(+control.value)) {
         return {
            valid: false
         };
      }
      return null;
   }

   writeValue(value: string) {
      this.durationInMinutes = value;
   }

   onChange: any = (value) => {};

   registerOnChange(onChangeCallback) {
      this.onChange = onChangeCallback;
   }

   registerOnTouched() {
   }

}
