import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'vts-demo-group-container',
  templateUrl: 'demo-group-container.component.html',
  styleUrls: [
    'demo-group-container.component.scss'
  ]
})
export class DemoGroupContainerComponent {

  @Input() set columns(value: number) {
    if (value >= 1 && value <= 12) {
      if (this._columns) {
        this.elRef.nativeElement.classList.remove(`col-sm-${this._columns}`);
      }

      this._columns = value;
      this.elRef.nativeElement.classList.add(`col-sm-${value}`);
    }
  }

  @Input() color: string = 'primary';

  @Input() title: string;

  private _columns: number;

  constructor(private elRef: ElementRef) {
    this.columns = 3;
  }
}

