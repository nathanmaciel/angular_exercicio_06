import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../temp-form/temp-form.component';
// import { TempFormComponent } from '../temp-form/temp-form.component';

// interface phones{
//   phone:string
// }

@Component({
  selector: 'app-exmp-diag',
  templateUrl: './exmp-diag.component.html',
  styleUrls:[]
})
export class ExmpDiagComponent {

  constructor(
    public dialogRef: MatDialogRef<ExmpDiagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  // @ViewChild(TempFormComponent) data!: TempFormComponent
  
  // name: string = this.data.name
  // lastName: string = this.data.lastName
  // username: string = this.data.username
  // cpf: string = this.data.cpf
  // mainPhone: string = this.data.mainPhone
  // objPhone: phones[] = this.data.objPhone
  // adress: string = this.data.adress
  // compl: string = this.data.compl
  // password: string = this.data.password
}
