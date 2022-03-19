import { Component, OnInit, Output, EventEmitter} from '@angular/core';
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

  // constructor(public dialog: MatDialog) {}

  constructor(public dialog: MatDialog) {}

  openDialog() {
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

      if(result == '') console.log(typeof(result))
      if (result == true) console.log(`Dialog result aaaaa: ${result}`);
    });
  }

  name: string = ''
  lastName: string = ''
  username: string = ''
  cpf: string = ''
  mainPhone: string = ''
  objPhone: phones[] = [{phone: ''}]
  adress: string = ''
  compl: string = ''
  password: string = ''
  confPassword: string = ''

  addTelSpace(){
    this.objPhone.push({phone: ''})
  }
  removeTelSpace(i: number){
    this.objPhone.splice(i, 1)
  }

  // @Output()
  // submit: EventEmitter<any> = new EventEmitter<any>()

  // submitForm(){
  //   this.submit.emit()
  // }

  ngOnInit(): void {
  }

}
