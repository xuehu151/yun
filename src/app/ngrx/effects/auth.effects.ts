import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { AuthService } from './../services/auth.service';
import * as actions from '../actions/auth.action';
import * as routerAction from '../actions/router.action';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';
@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private service: AuthService,
    private router: Router
  ) { }

  /**
   *登录
   */
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.LOGIN),
    mergeMap((action: actions.LoginAction) =>
      this.service.login(action.payload).pipe(
        map(data => new actions.LoginSuccessAction(data)),
        catchError(err => of(new actions.LoginFailAction({
          status: 501,
          message: err.message,
          exception: err.stack,
          path: '/login',
          timestamp: new Date()
        })))
      ))
  );

  /**
   * 登录成功导航到主页
   */
  @Effect()
  navigateHome$: Observable<Action> = this.actions$.pipe(
    ofType(actions.ActionTypes.LOGIN_SUCCESS),
    map(() => new routerAction.Go({ path: ['/overview'] }))
  );

}
