import { Input, ViewChild } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ReacFormComponent } from '../reac-form/reac-form.component';


export function ValidatePhone(control: AbstractControl) {
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
