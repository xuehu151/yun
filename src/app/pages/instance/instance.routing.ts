import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {
    path: 'instance',
    component: ListComponent,
    pathMatch: 'full',
    children: []
  },
  {
    path: 'instance/create',
    component: CreateComponent
  },
  {
    path: 'instance/detail/:id/:index',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstanceRoutingModule {
}
