import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdDialog } from '@angular/material';
import { SimpleDialogComponent } from '../../components/simple-dialog';

@Component({
  selector: 'vts-components-baseline-page',
  templateUrl: 'components-baseline-page.container.html',
  styleUrls: [
    'components-baseline-page.container.scss'
  ]
})
export class ComponentsBaselinePageComponent implements OnInit {
  dialogRef: MdDialogRef<SimpleDialogComponent>;
  lastCloseResult: string;
  showCustomAlert: boolean = true;

  constructor(public dialog: MdDialog) {
  }

  ngOnInit() {

  }

  closeAlert(alert: any) {
  }

  closeAlertCustom(data: any) {
    this.showCustomAlert = false;
    setTimeout(() => this.open(data), 300);
  }

  open(data?: any) {
    this.dialogRef = this.dialog
      .open(SimpleDialogComponent);

    this.dialogRef.componentInstance.data = data;

    this.dialogRef.afterClosed().subscribe(result => {
      this.lastCloseResult = result;
      this.dialogRef = null;
    });
  }

  openTimeout() {
  }

  resetAlerts() {
  }

  resetCustomAlert() {
    this.showCustomAlert = true;
  }


  handleStepChange(event: number) {
    console.log('Step has changed ' + event);
  }

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
}


