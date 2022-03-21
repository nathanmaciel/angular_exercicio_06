import { Component, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';

  nextUser: number = 1
  
  emitToTemp(){
    this.nextUser++;
  }

}

