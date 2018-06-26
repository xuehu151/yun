import { CatalogEffects } from './catalog.effects';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import { OverviewEffects } from './overview.effects';
import { InstanceEffects } from './instance.effects';
import { KeyPairEffects } from './keypair.effects';
import { RouterEffects } from './router.effects';
import { VolumeEffects } from './volume.effects';
import { ImagesEffects } from './image.effects';

export const effects = [
  AuthEffects,
  CatalogEffects,
  OverviewEffects,
  InstanceEffects,
  KeyPairEffects,
  VolumeEffects,
  ImagesEffects,
  RouterEffects
];

@NgModule({
  imports: [
    EffectsModule.forRoot(effects)
  ]
})
export class AppEffectModule {
}
