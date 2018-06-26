import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ComponentsModule } from '../../components/components.module';
import { InstanceRoutingModule } from './instance.routing';
import { DirectivesModule } from '../../directives/directives.module';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { NetComponent } from './net/net.component';
import { SystemComponent } from './system/system.component';
import { ConfigComponent } from './config/config.component';
import { BaseComponent } from './base/base.component';
import { ConnectInterfacesComponent } from './modal/connect-interfaces/connect-interfaces.component';
import { DisconnectInterfacesComponent } from './modal/disconnect-interfaces/disconnect-interfaces.component';
import { DisconnectVolumesComponent } from './modal/disconnect-volumes/disconnect-volumes.component';
import { ConnectVolumesComponent } from './modal/connect-volumes/connect-volumes.component';
import { SnapshotModalComponent } from './modal/snapshot-modal/snapshot-modal.component';
import { EditInstanceComponent } from './modal/edit-instance/edit-instance.component';

@NgModule({
  imports: [
    ComponentsModule,
    InstanceRoutingModule,
    DirectivesModule
  ],
  declarations: [
    ListComponent,
    CreateComponent,
    DetailComponent,
    NetComponent,
    SystemComponent,
    ConfigComponent,
    BaseComponent,
    SnapshotModalComponent,
    ConnectInterfacesComponent,
    DisconnectInterfacesComponent,
    DisconnectVolumesComponent,
    ConnectVolumesComponent,
    EditInstanceComponent
  ],
  entryComponents: [
    CreateComponent,
    SnapshotModalComponent,
    ConnectInterfacesComponent,
    DisconnectInterfacesComponent,
    DisconnectVolumesComponent,
    ConnectVolumesComponent,
    EditInstanceComponent
  ]
})
export class InstanceModule { }
