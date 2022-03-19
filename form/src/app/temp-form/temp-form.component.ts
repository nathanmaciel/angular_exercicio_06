import { Component, OnInit, Output } from '@angular/core';

interface phones{
    phone:string
    required: boolean
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
  aditPhones: string[] = []
  adress: string = ''
  compl: string = ''
  @Output()
  password: string = ''
  confPassword: string = ''

  objPhone: phones[] = [{phone: '', required: true}]


  addTelSpace(){
    this.objPhone.push({phone: '', required: false})
  }
  removeTelSpace(i: number){
    this.objPhone.splice(i, 1)
  }

  getPass(): string{
    return this.password
  }

  // minMaxNumbers(min: number, max: number, input: string): boolean{
  //   var num = input.match(/\d/g)?.join('')
  //   if (num == null) num = ''
  //   console.log(num)
  //   return num.length >= min && num.length <= max
  // }

  // isSame(): boolean {
  //   if(this.password == this.confPassword && this.confPassword.length > 0) return false
  //   if(this.password == this.confPassword && this.confPassword.length == 0) return false
  //   else return true
  // }

  // everythingOk(): boolean{
  //   if(
  //     this.name.length >= 2 &&
  //     this.lastName.length >= 2 &&
  //     this.username.length >=  6 &&
  //     this.username.length >=  6
  //   ) return false
  //   else return true
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
