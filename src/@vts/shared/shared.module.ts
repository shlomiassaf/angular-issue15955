import { NgModule, ModuleWithProviders } from '@angular/core';
import { MODULES, ROOT_MODULES } from './modules';

@NgModule({
  imports: ROOT_MODULES,
  exports: MODULES,

})
export class VtsSharedModuleRoot {}

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class VtsSharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: VtsSharedModuleRoot };
  }
}
