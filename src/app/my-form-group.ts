import { AbstractControl, AbstractControlOptions, FormGroup } from '@angular/forms';

export class MyFormGroup<T extends { [K in keyof T]: AbstractControl }> extends FormGroup<T> {
  constructor(controls: T, opts?: AbstractControlOptions) {
    super(controls, opts);
  }
}
