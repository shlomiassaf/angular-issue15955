import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';


import { DialogWrapperComponent } from './vts-dialog-wrapper';

export const COMPONENTS: any[] = [
  DialogWrapperComponent
];


@NgModule({
  // Widgets modules are NOT dependant on other VTS modules, only 3rd party modules.
  // DO NOT ADD ANY LOCAL DEPENDENCY
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    TranslateModule
  ],
  declarations: COMPONENTS,
  providers: [],
  exports: COMPONENTS,
  entryComponents: [
    DialogWrapperComponent
  ]
})
export class VtsWidgetsModule {

}
