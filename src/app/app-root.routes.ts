import { Routes } from '@angular/router';

import { Page404Component } from './page-404';
import { HomePageComponent } from './home-page';


export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'not-found', component: Page404Component },
];
