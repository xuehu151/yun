import { of } from 'rxjs/observable/of';
import { map, mergeMap, catchError } from 'rxjs/operators';


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as actions from '../actions/catalog.action';
import { CatalogService } from './../services/catalog.service';

@Injectable()
export class CatalogEffects {
  @Effect() $loadCatalogs: Observable<Action> = this.actions$
    .ofType(actions.ActionTypes.LOADS)
    .pipe(mergeMap(_ => {
      return this.service.loadCatalogs()
        .pipe(
          map(data => new actions.LoadCatalogsSuccessAction(data)),
          catchError(err => of(new actions.LoadCatalogsFailAction(JSON.stringify(err))))
        );
    }));

  constructor(
    private service: CatalogService,
    private actions$: Actions
  ) { }
}
