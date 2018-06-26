import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as actions from '../actions/image.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ImageService } from '../services/image.service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ImagesEffects {
  @Effect() images$: Observable<Action> = this.actions$
    .pipe(
      ofType<actions.ImageActions>(actions.ImageActionTypes.Load),
      map(action => action.payload),
      switchMap(payload => {
        return this.service.loadImages()
          .pipe(
            map(data => new actions.LoadSuccessAction(data)),
            catchError(err => of(new actions.LoadFailAction(JSON.stringify(err))))
          );
      })
    );

  constructor(
    private actions$: Actions,
    private service: ImageService,
  ) { }
}
