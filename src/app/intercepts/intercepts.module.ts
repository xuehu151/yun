import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './request.intercept';
import { ResponseInterceptor } from './response.intercept';

@NgModule()
export class InterceptsModule {
  static forRoot() {
    return {
      ngModule: InterceptsModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true },
      ]
    };
  }
}
