import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ElementRef,
  ViewChild,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { MdDialogRef } from '@angular/material';

export interface VtsDialogButtonConfig {
  text: string;

  /**
   * Material palette
   */
  color?: string;

  cssClass?: string;
}

/**
 * A projectable component, used to wrap a component in a VTS style Dialog format.
 * The content of the component will be wrapped in a VTS dialog shell that controls the buttons and
 * top close button. The buttons are set by the component using bindings.
 *
 * EXAMPLE:
 * <div vts-dialog-wrapper [title]="'Hello VTS'" [showClose]="true" [buttons]="{...}">
 *   <h1>EXAMPLE</h1>
 * </div>
 *
 * The component above will project into vts dialog wrapper and output:
 * <div class="vts-dialog-container">
 *   <h2 class="vts-dialog-title">Hello VTS</h2>
 *   <a *ngIf="showClose" class="vts-dialog-close" (click)="dialogRef.close()"><i class="fi-close"></i></a>
 *   <div>
 *      <h1>EXAMPLE</h1>
 *   </div>
 *   <div class="vts-dialog-button-row">
 *      .. BUTTONS as defined in the button object ..
 *   </div>
 * </div>
 */
@Component({
  selector: '[vts-dialog-wrapper]',
  templateUrl: './dialog-wrapper.component.html',
  styleUrls: [
    './dialog-wrapper.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogWrapperComponent implements OnInit {
  /**
   * The title for this dialog
   */
  @Input() get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
    this.dc();
  }

  /**
   * Show/Hide the close button
   * @type {boolean}
   */
  @Input() get showClose(): boolean {
    return this._showClose;
  }
  set showClose(value: boolean) {
    this._showClose = value;
    this.dc();
  }

  @Input() get buttons(): VtsDialogButtonConfig[] {
    return this._buttons;
  }
  set buttons(value: VtsDialogButtonConfig[]) {
    this._buttons = value;
    this.dc();
  }


  private _title: string;
  private _showClose: boolean;
  private _buttons: VtsDialogButtonConfig[];


  constructor(public dialogRef: MdDialogRef<any>,
              private _ref: ElementRef,
              private cdr: ChangeDetectorRef) {}


  ngOnInit() {
  }

  onButtonClick(btn: VtsDialogButtonConfig): void {
    this._invokeIf(this.dialogRef.componentInstance, 'onDialogButtonClick', btn);
  }


  private dc(): void {
    this.cdr.markForCheck();
  }

  private _invokeIf(obj: any, fnName: string, ...args: any[]): any {
    if (typeof obj[fnName] === 'function') {
      return obj[fnName](...args);
    }
  }
}
