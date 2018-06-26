import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './ngrx/services/services.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/overview',
    pathMatch: 'full',
  },
  // { path: 'overview', loadChildren: 'app/pages/overview/index#OverviewModule', pathMatch: 'full', canActivate: [AuthGuardService] },
  // {
  //   path: 'instance', loadChildren: 'app/pages/instance/instance.module#InstanceModule',
  //   pathMatch: 'full', canActivate: [AuthGuardService]
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
