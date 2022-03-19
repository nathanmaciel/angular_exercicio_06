import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateCPFDirective } from '../directives/validate-cpf.directive';
import { ValidateTelDirective } from '../directives/validate-tel.directive';
import { ValidateCPF } from '../rect-validators/cpf.validator';
import { passValidator } from '../rect-validators/pass.validator';
import { ValidatePhone } from '../rect-validators/tel.validator';


@Component({
  selector: 'app-reac-form',
  templateUrl: './reac-form.component.html',
  styleUrls: ['./reac-form.component.css']
})
export class ReacFormComponent{

  passKey: string = ''

  formData: FormGroup = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      lastName: new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      cpf: new FormControl('',[
        Validators.required,
        ValidateCPF
      ]),
      phones: new FormArray([
        new FormControl('12345',[
          Validators.required,
          ValidatePhone
        ])
      ]),
      adress: new FormControl(''),
      compl: new FormControl(''),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      confPassword: new FormControl('',[
        Validators.required,
        passValidator
      ])
  })

  phoneArr: FormArray = this.formData.get('phones') as FormArray

  addPhone(){
    this.phoneArr.push(new FormControl('',[]))
  }
  removePhone(i: number){
    this.phoneArr.removeAt(i)
  }

  changeKey(){
    this.passKey = this.formData.get('password')?.value
  }
  constructor() { 
  }

}

