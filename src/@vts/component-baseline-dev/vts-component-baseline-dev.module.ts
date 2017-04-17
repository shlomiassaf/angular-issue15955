import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VtsSharedModule } from '@vts/shared';

import { SimpleDialogComponent } from './components/simple-dialog';
import { GROUP_COMPONENTS } from './containers/groups';
import { ComponentsBaselinePageComponent } from './containers';
import { DemoGroupContainerComponent } from './components/demo-group-container/demo-group-container.component';

import { ROUTES } from './component-baseline-dev.routes';

@NgModule({
  declarations: [
    DemoGroupContainerComponent,
    ComponentsBaselinePageComponent,
    SimpleDialogComponent,
    GROUP_COMPONENTS
  ],
  imports: [
    VtsSharedModule,
    RouterModule.forChild(ROUTES)
  ],
  entryComponents: [SimpleDialogComponent]
})
export class VtsComponentBaselineDevModule {
}
