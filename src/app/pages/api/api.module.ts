import { NgModule } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ComponentsModule } from '../../components/components.module';
import { ApiRoutingModule } from './api.routing';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [
    ComponentsModule,
    ApiRoutingModule,
    DirectivesModule,
  ],
  declarations: [ListComponent]
})
export class ApiModule { }
