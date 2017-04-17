import { Component } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';


import { SimpleDialogComponent } from '../../../components/simple-dialog';

@Component({
  selector: 'vts-md-input-container-demo',
  templateUrl: './md-input-container-demo.container.html',
  styleUrls: [
    './md-input-container-demo.container.scss'
  ]
})
export class MdInputContainerDemoComponent {
  lastCloseResult: string;
  dialogRef: MdDialogRef<SimpleDialogComponent>;

  constructor(public dialog: MdDialog) { }


  open(data: any) {
    this.dialogRef = this.dialog
      .open(SimpleDialogComponent);

    this.dialogRef.componentInstance.data = data;

    this.dialogRef.afterClosed().subscribe(result => {
      this.lastCloseResult = result;
      this.dialogRef = null;
    });
  }
}

