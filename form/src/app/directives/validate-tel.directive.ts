import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidateTel]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateTelDirective,
      multi: true
    }
  ]
})
export class ValidateTelDirective implements Validator{

  validate(control: AbstractControl): ValidationErrors | null {
    var num = control.value?.match(/\d/g)
    var ret:string;
    if (num == null) ret = ''
    else ret = num.join('')
    
    if(ret.length < 10 || ret.length > 13){
      return {'validateTelInvalid': true}
    }

    return null;
  }

}
