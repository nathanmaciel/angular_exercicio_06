import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators, NgForm, RequiredValidator, CheckboxRequiredValidator } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ValidateCPFDirective } from '../directives/validate-cpf.directive';
import { ValidateTelDirective } from '../directives/validate-tel.directive';
import { ExmpDiagComponent } from '../exmp-diag/exmp-diag.component';
import { ValidateCPF } from '../rect-validators/cpf.validator';
import { passValidator } from '../rect-validators/pass.validator';
import { ValidatePhone } from '../rect-validators/tel.validator';
import { DialogData, Phones} from '../modules/dialog-data';


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
        new FormControl('',[
          Validators.required,
          ValidatePhone
        ])
      ]),
      adress: new FormControl(''),
      compl: new FormControl(''),
      passes: new FormGroup({
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          
        ]),
        confPassword: new FormControl('',[
          Validators.required
        ])
      })
  })

  phoneArr: FormArray = this.formData.get('phones') as FormArray

  passConference: FormControl = this.formData.get('passes')?.get('confPassword') as FormControl

  
  addPhone(){
    this.phoneArr.push(new FormControl('',[]))
  }
  removePhone(i: number){
    this.phoneArr.removeAt(i)
  }

  changeKey(){
    var aux = this.passKey
    this.passKey = this.formData.get('passes')?.get('password')?.value
    this.passConference.clearValidators()
    this.passConference.setValidators(Validators.required)
    this.passConference.addValidators(passValidator(this.passKey))
  }
  

  phoneObj: Phones[] = [{phone: '12'}];
  mainPhone: string = ''

  mainPhoneObj: Phones = {phone: '12'}


  userNum: number = 1

  constructor(public dialog: MatDialog) {}

  openDialog(form: any){

    var index = 0
    for(let i of this.phoneArr.controls){
      this.phoneObj[index].phone = i.value
      this.phoneObj.push({phone: ''})
      index++;
    }

    var aux = this.phoneObj.shift()
    if (aux != undefined){
      this.mainPhoneObj = aux
      this.mainPhone = this.mainPhoneObj.phone
    }

    const dialogRef = this.dialog.open(ExmpDiagComponent, {
      width: '300px',
      data: {
        name: this.formData.get('name')?.value,
        lastName: this.formData.get('lastName')?.value, 
        username: this.formData.get('username')?.value, 
        cpf: this.formData.get('cpf')?.value,
        mainPhone: this.mainPhone,
        objPhone: this.phoneObj,
        adress: this.formData.get('adress')?.value, 
        compl: this.formData.get('compl')?.value, 
        password: this.formData.get('passes')?.get('password')?.value
      },
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result == '') {
        console.log(`%cUsuário ${this.userNum}`, 'font-size: 20px;')
        console.log('Dados Corrigidos')
      }
      if (result == true) this.printData(form);
    });
  }

  printData(form: any){

    console.log(`%cUsuário ${this.userNum}`, 'font-size: 20px;')
    console.log(`Nome: ${this.formData.get('name')?.value}`)
    console.log(`Sobrenome: ${this.formData.get('lastName')?.value}`)
    console.log(`Username: ${this.formData.get('lastName')?.value}`)
    console.log(`CPF: ${this.formData.get('cpf')?.value}`)
    console.log(`Telefone Principal: ${this.mainPhone}`)
    for(let i in this.phoneObj) console.log(`Telefone adicional ${i+1}: ${this.phoneObj[i].phone}`)
    console.log(`Endereço: ${this.formData.get('adress')?.value}`)
    console.log(`Complemento: ${this.formData.get('compl')?.value}`)
    console.log(`Senha: ${this.passKey}`)

    form.resetForm()

    this.userNum++
  }



}