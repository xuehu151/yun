import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../reducers';
import { map, defaultIfEmpty } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private store$: Store<fromRoot.State>, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.checkAuth();
  }

  checkAuth(): Observable<boolean> {
    return this.store$
      .select(s => s.auth.auth)
      .pipe(
        map(auth => {
          console.log(auth);
          const result = auth && auth.token !== undefined && auth.token !== null;
          if (!result) {
            this.router.navigate(['/login']);
          }
          return result;
        }),
        defaultIfEmpty<boolean>(false)
      );
  }

}
