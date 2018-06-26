import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ComponentsModule } from '../../components/components.module';
import { ImageRoutingModule } from './image.routing';
import { DirectivesModule } from '../../directives/directives.module';
import { CreateVolumeComponent } from './modal/create-volume/create-volume.component';

@NgModule({
  imports: [
    ComponentsModule,
    DirectivesModule,
    ImageRoutingModule,
  ],
  declarations: [ListComponent, CreateVolumeComponent],
  entryComponents: [
    CreateVolumeComponent
  ]
})
export class ImageModule { }
