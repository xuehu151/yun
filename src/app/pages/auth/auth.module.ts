import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../../components/components.module';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  imports: [
    ComponentsModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
