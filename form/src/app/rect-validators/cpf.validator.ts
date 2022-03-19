import { AbstractControl } from '@angular/forms';

export function ValidateCPF(control: AbstractControl) {
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