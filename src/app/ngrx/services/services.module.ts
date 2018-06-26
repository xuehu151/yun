import { KeypairService } from './keypair.service';
import { CatalogService } from './catalog.service';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { OverviewService } from './overview.service';
import { InstanceService } from './instance.service';
import { AuthGuardService } from './auth-guard.service';
import { VolumeService } from './volume.service';
import { ImageService } from './image.service';
import { ApiService } from './api.service';

export {
  AuthGuardService,
  AuthService,
  CatalogService,
  OverviewService,
  InstanceService,
  KeypairService,
  VolumeService,
  ImageService,
  ApiService,
};

@NgModule()
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        AuthService,
        AuthGuardService,
        CatalogService,
        OverviewService,
        InstanceService,
        KeypairService,
        VolumeService,
        AuthGuardService,
        ImageService,
        ApiService,
      ]
    };
  }
}
