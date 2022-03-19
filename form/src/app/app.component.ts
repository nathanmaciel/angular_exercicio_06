import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

interface phones{
  phone:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';

}

// @Component({
//   selector: 'app-dilalog-content',
//   templateUrl: 'dilalog-content.component.html'
// })
// export class DilalogContentComponent  {

//   @ViewChild(TempFormComponent) data!: TempFormComponent

//   name: string = this.data.name
//   lastName: string = this.data.lastName
//   username: string = this.data.username
//   cpf: string = this.data.cpf
//   mainPhone: string = this.data.mainPhone
//   objPhone: phones[] = this.data.objPhone
//   adress: string = this.data.adress
//   compl: string = this.data.compl
//   password: string = this.data.password
  
//   constructor() { }

// }
