import { Directive, ElementRef, ViewChild , Input} from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { TempFormComponent } from '../temp-form/temp-form.component';

@Directive({
  selector: '[appValidatePass]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: ValidatePassDirective,
      multi: true
    }
  ]
})
export class ValidatePassDirective implements Validator{

  @Input('appValidatePass') firstPass = ''

  validate(control: AbstractControl): {[key: string]: any}  | null {
    let confPass: string = (control.value != null ? control.value : '')
    if(confPass != this.firstPass && confPass.length > 0){
      return {'validatePassInvalid': true}
    }
    return null;
  }

}
