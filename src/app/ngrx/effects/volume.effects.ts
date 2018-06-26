import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as actions from '../actions/volume.action';
import { mergeMap, catchError, map, switchMap } from 'rxjs/operators';
import { VolumeService } from '../services/volume.service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class VolumeEffects {

  @Effect() volumes$: Observable<Action> = this.actions$
    .pipe(
      ofType<actions.LoadAction>(actions.VolumeActionTypes.Load),
      map(action => action.payload),
      switchMap(payload => {
        return this.service.loadVolumes().pipe(
          map(data => new actions.LoadSuccessAction(data)),
          catchError(err => of(new actions.LoadFailAction(JSON.stringify(err))))
        );
      })
    );

  constructor(
    private actions$: Actions,
    private service: VolumeService
  ) { }

}
