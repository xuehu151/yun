import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ComponentsModule } from '../../components/components.module';
import { VolumesRoutingModule } from './volumes.routing';
import { DirectivesModule } from '../../directives/directives.module';
import { ExtendVolumeComponent } from './modal/extend-volume/extend-volume.component';
import { EditVolumeComponent } from './modal/edit-volume/edit-volume.component';

@NgModule({
  imports: [
    ComponentsModule,
    DirectivesModule,
    VolumesRoutingModule,
  ],
  declarations: [
    ListComponent,
    ExtendVolumeComponent,
    EditVolumeComponent
  ],
  entryComponents: [
    ExtendVolumeComponent
  ]
})
export class VolumesModule { }
