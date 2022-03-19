import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passValidator(control: AbstractControl) {
  console.log('aaa')
  console.log(control.value.password)

  if (control.value.password != control.value.confPassword && control.value.confPassword.length > 0){
    console.log('iguais')
    return {'passValidation': true}
  }

  console.log('null')
  return null;
}
