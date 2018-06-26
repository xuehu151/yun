import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { KeypairService } from './../services/keypair.service';
import * as actions from '../actions/keypair.action';

@Injectable()
export class KeyPairEffects {

  @Effect() $keypair: Observable<Action> = this.actions$
    .pipe(
      ofType(actions.ActionTypes.LOAD),
      mergeMap(payload => {
        return this.service.getKeyPairs().pipe(
          map(data => new actions.LoadKeypairSuccessAction(data)),
          catchError(err => of(new actions.LoadKeypairFailAction(JSON.stringify(err))))
        );
      })
    );

  constructor(
    private actions$: Actions,
    private service: KeypairService,
  ) { }
}

