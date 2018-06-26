import { of } from 'rxjs/observable/of';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { OverviewService } from './../services/overview.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as actions from '../actions/overview.action';

@Injectable()
export class OverviewEffects {
  @Effect() $overview: Observable<Action> = this.actions$
    .ofType(actions.ActionTypes.LOAD)
    .pipe(mergeMap(_ => {
      return this.service
        .loadOverView()
        .pipe(
          map(data => new actions.LoadOverViewSuccessAction(data)),
          catchError(err => of(new actions.LoadOverViewFailureAction(JSON.stringify(err))))
        );
    }));

  constructor(
    private service: OverviewService,
    private actions$: Actions
  ) { }
}
