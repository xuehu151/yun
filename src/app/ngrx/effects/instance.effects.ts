import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as actions from '../actions/instance.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { InstanceService } from './../services/instance.service';


@Injectable()
export class InstanceEffects {
  @Effect() $Instance: Observable<Action> = this.actions$
    .pipe(
      ofType(actions.ActionTypes.LOAD),
      mergeMap(payload => {
        return this.service
          .getInstances(payload)
          .pipe(
            map(data => new actions.LoadInstanceSuccessAction(data)),
            catchError(err => of(new actions.LoadInstanceFailAction(JSON.stringify(err))))
          );
      })
    );

  constructor(
    private service: InstanceService,
    private actions$: Actions
  ) { }
}
