import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { AuthGuardService } from '../../ngrx/services/services.module';

const routes: Routes = [
  { path: 'overview', component: OverviewComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverViewRoutingModule {
}
