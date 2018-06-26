import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';
import { AppEffectModule } from './effects';
import { AppStoreModule } from './reducers';

@NgModule({
  imports: [
    ServicesModule.forRoot(),
    AppStoreModule,
    AppEffectModule
  ],
  exports: [
    AppStoreModule,
    AppEffectModule
  ]
})
export class NgrxModule { }
