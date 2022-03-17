import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appValidateCPF]',
  providers:[
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateCPFDirective,
      multi: true
    }
  ]
})
export class ValidateCPFDirective implements Validator{

  validate(control: AbstractControl): {[key: string]: any}  | null {
    var num = control.value?.match(/\d/g)
    var ret:string;
    if (num == null) ret = ''
    else ret = num.join('')
    
    if(ret.length != 11){
      return {'validateCPFInvalid': true}
    }

    return null;
  }

  constructor() { }

}
