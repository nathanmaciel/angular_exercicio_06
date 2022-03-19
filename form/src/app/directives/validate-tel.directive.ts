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
    var num: string = (control.value != null ? control.value : '')
    var numArr: string[]|null = (num.match(/\d/g) != null ? num.match(/\d/g) : ['1'])
    var ret:string;
    if (numArr != null){
      ret = numArr.join('')
    } else {ret = ''}
    
    if((ret.length < 10 || ret.length > 13) && num.length != 0){
      return {'validateTelInvalid': true}
    }

    return null;
  }

}
