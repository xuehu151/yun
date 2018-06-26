import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../ngrx/reducers';
import { Store } from '@ngrx/store';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  token: string;

  constructor(private store$: Store<fromRoot.State>) {
    this.store$.select(fromRoot.getAuth).subscribe(auth => {
      this.token = (auth && auth.token) ? auth.token : '';
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers = req.headers
      .set('Content-Type', 'application/json')
      .set('Accept-Language', 'zh')
      .set('Set-Cookie', this.token || '');

    console.log(headers);
    const url = req.url.replace('{host}', 'http://localhost:3100')
      .replace('{test}', 'http://192.168.11.147:8999/wecare')
      .replace('{server}', 'http://192.168.11.180:8082');
    const authReq = req.clone({ headers, url });
    return next.handle(authReq);
  }
}
