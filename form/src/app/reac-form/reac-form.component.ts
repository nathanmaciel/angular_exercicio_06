import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
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
        new FormControl('12345',[
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
    this.passKey = this.formData.get('passes')?.get('password')?.value
    this.passConference.addValidators(passValidator(this.passKey))
  }

  constructor(public dialog: MatDialog) {}

  openDialog(){
    const dialogRef = this.dialog.open(ExmpDiagComponent, {
      width: '250px',
      data: {
        name: this.formData.get('name')?.value,
        lastName: this.formData.get('lastName')?.value, 
        username: this.formData.get('username')?.value, 
        cpf: this.formData.get('cpf')?.value, 
        adress: this.formData.get('adress')?.value, 
        compl: this.formData.get('compl')?.value, 
        password: this.formData.get('passes')?.get('password')?.value
      },
    });

    dialogRef.afterClosed().subscribe(result => {

      // if(result == '') {
      //   // console.log(`%cUsuário ${this.userNum}`, 'font-size: 20px;')
      //   // console.log('Dados Corrigidos')
      // }
      // if (result == true);
    });
  }

}