import { Component, OnInit } from '@angular/core';

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
  tels: string[] = ['']
  adress: string = ''
  compl: string = ''
  password: string = ''
  confPassword: string = ''

  addTelSpace(){
    this.tels.push('')
  }
  removeTelSpace(i: number){
    this.tels.splice(i, 1)
  }

  // minMaxNumbers(min: number, max: number, input: string): boolean{
  //   var num = input.match(/\d/g)?.join('')
  //   if (num == null) num = ''
  //   console.log(num)
  //   return num.length >= min && num.length <= max
  // }

  isSame(): boolean {
    if(this.password == this.confPassword && this.confPassword.length > 0) return false
    if(this.password == this.confPassword && this.confPassword.length == 0) return false
    else return true
  }

  everythingOk(): boolean{
    if(
      this.name.length >= 2 &&
      this.lastName.length >= 2 &&
      this.username.length >=  6 &&
      this.username.length >=  6
    ) return false
    else return true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
