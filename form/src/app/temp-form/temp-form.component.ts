import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ExmpDiagComponent } from '../exmp-diag/exmp-diag.component';

interface phones{
    phone:string
}

export interface DialogData {
  name: string 
  lastName: string 
  username: string 
  cpf: string 
  mainPhone: string 
  objPhone: phones[]
  adress: string 
  compl: string 
  password: string 
}

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {

  name: string = ''
  lastName: string = ''
  username: string = ''
  cpf: string = ''
  mainPhone: string = ''
  objPhone: phones[] = []
  adress: string = ''
  compl: string = ''
  password: string = ''
  confPassword: string = ''

  userNum: number = 1

  addTelSpace(){
    this.objPhone.push({phone: ''})
  }
  removeTelSpace(i: number){
    this.objPhone.splice(i, 1)
  }

  constructor(public dialog: MatDialog) {}

  openDialog(form: NgForm) {
    const dialogRef = this.dialog.open(ExmpDiagComponent, {
      width: '250px',
      data: {
        name: this.name,
        lastName: this.lastName, 
        username: this.username, 
        cpf: this.cpf, 
        mainPhone: this.mainPhone, 
        objPhone: this.objPhone,
        adress: this.adress, 
        compl: this.compl, 
        password: this.password
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

  printData(form: NgForm){
    
    console.log(`%cUsuário ${this.userNum}`, 'font-size: 20px;')
    console.log(`Nome: ${this.name}`)
    console.log(`Sobrenome: ${this.lastName}`)
    console.log(`Username: ${this.username}`)
    console.log(`CPF: ${this.cpf}`)
    console.log(`Telefone Principal: ${this.mainPhone}`)
    for(let i in this.objPhone) console.log(`Telefone adicional ${i+1}: ${this.objPhone[i].phone}`)
    console.log(`Endereço: ${this.adress}`)
    console.log(`Complemento: ${this.compl}`)
    console.log(`Senha: ${this.password}`)

    form.resetForm()

    this.userNum++
  }

  ngOnInit(): void {
  }

}
