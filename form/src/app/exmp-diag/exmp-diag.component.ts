import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DialogData, Phones} from '../modules/dialog-data';


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
}
