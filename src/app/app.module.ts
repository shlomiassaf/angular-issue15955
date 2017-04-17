import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';


// loading feature modules:
import { VtsSharedModule } from '@vts/shared';

import { VtsComponentBaselineDevModule } from '@vts/component-baseline-dev';


import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app-root.routes';


import { VtsAppRootComponent } from './app-root.container';
import { Page404Component } from './page-404';
import { HomePageComponent } from './home-page';



// Application wide providers
const APP_PROVIDERS: any[] = [];


/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ VtsAppRootComponent ],
  declarations: [
    VtsAppRootComponent,
    Page404Component,
    HomePageComponent
  ],
  imports: [ // import Angular's modules
    VtsSharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    VtsComponentBaselineDevModule,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

}

