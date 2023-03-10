import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyFormGroup } from './my-form-group';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly form = new MyFormGroup({
    myControl: new FormControl('')
  });

  constructor() {
    // here code completion works
    console.log(this.form.controls.myControl.value);
  }
}
