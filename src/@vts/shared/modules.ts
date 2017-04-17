import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { VtsWidgetsModule } from '@vts/widgets';

export function createTranslateLoader(http: Http): TranslateStaticLoader {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

export const ROOT_MODULES: any = [
  CommonModule,
  ReactiveFormsModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpModule,
  MaterialModule,
  TranslateModule.forRoot({
    provide: TranslateLoader,
    useFactory: createTranslateLoader,
    deps: [Http]
  }),
  NgxDatatableModule,
  VtsWidgetsModule
];

export const MODULES: any = [
  CommonModule,
  ReactiveFormsModule,
  HttpModule,
  MaterialModule,
  TranslateModule,
  NgxDatatableModule,
  VtsWidgetsModule
];
