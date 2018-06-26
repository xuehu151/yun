import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { OverviewModule } from './overview';
import { InstanceModule } from './instance/instance.module';
import { KeypairsModule } from './keypairs/keypairs.module';
import { PageRoutingModule } from './page.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VolumesModule } from './volumes/volumes.module';
import { ImageModule } from './image/image.module';
import { ApiModule } from './api/api.module';

@NgModule({
  imports: [
    ComponentsModule,
    AuthModule,
    InstanceModule,
    KeypairsModule,
    OverviewModule,
    VolumesModule,
    ImageModule,
    ApiModule,
    PageRoutingModule
  ],
  // exports: [
  //   AuthModule,
  //   InstanceModule,
  //   KeypairsModule,
  //   OverviewModule,
  // ],
  declarations: [PageNotFoundComponent]
})
export class PagesModule { }
