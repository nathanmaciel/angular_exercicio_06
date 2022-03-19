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
    var num: string = (control.value != null ? control.value : '')
    var numArr: string[]|null = (num.match(/\d/g) != null ? num.match(/\d/g) : ['1'])
    var ret:string;
    if (numArr != null){
      ret = numArr.join('')
    } else {ret = ''}
    
    if(ret.length != 11 && num.length != 0){
      return {'validateCPFInvalid': true}
    }

    return null;
  }

  constructor() { }

}
