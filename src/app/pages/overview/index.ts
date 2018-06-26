import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { OverViewRoutingModule } from './overview.routing';

@NgModule({
  imports: [
    ComponentsModule,
    OverViewRoutingModule
  ],
  declarations: [OverviewComponent]
})
export class OverviewModule { }
