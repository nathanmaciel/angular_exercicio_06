import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { TempFormComponent } from './temp-form/temp-form.component';
import { ReacFormComponent } from './reac-form/reac-form.component';
import { ValidateTelDirective } from './directives/validate-tel.directive';
import { ValidateCPFDirective } from './directives/validate-cpf.directive';

@NgModule({
  declarations: [
    AppComponent,
    TempFormComponent,
    ReacFormComponent,
    ValidateTelDirective,
    ValidateCPFDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }