import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { KeypairsRoutingModule } from './keypairs.routing';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [
    ComponentsModule,
    KeypairsRoutingModule,
    DirectivesModule,
  ],
  declarations: [ListComponent]
})
export class KeypairsModule { }
