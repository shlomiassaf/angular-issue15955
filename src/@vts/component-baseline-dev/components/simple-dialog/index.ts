import { Component } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';
import { VtsDialogButtonConfig } from '@vts/widgets';

@Component({
  selector: 'vts-simple-dialog',
  template: `
<div vts-dialog-wrapper [title]="'Hello VTS'" [showClose]="true" [buttons]="buttons">
  <div *ngIf="data">
    <h4>Searching: "<b>{{data}}</b>"</h4>
  </div>
  <div *ngIf="!data">
    <p>It's Jazz!</p>
    <p><label>How much? <input #howMuch></label></p>
  </div>  
</div>

`
})
export class SimpleDialogComponent {
  data: any;

  constructor(public dialogRef: MdDialogRef<SimpleDialogComponent>) {
  }

  buttons: VtsDialogButtonConfig[] = [
    {
      text: 'Cancel',
      color: 'accent'
    },
    {
      text: 'OK'
    }
  ];

  onDialogButtonClick(button: VtsDialogButtonConfig): void {
    this.dialogRef.close(button.text === 'OK' ? 'value' : undefined);
  }
}
