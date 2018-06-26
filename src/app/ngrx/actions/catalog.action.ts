import { Action } from '@ngrx/store';
import { type } from '../../utils';
import { Catalog } from '../../domain';

export const ActionTypes = {
  LOADS: type('[Catalog] loads '),
  LOADS_SUCCESS: type('[Catalog] loads_success'),
  LOADS_FAIL: type('[Catalog] loads_fail'),
  OPEN_OR_CLOSE: type('[Catalog] open or close'),
  ACTIVE: type('[Catalog] active'),
};


export class LoadCatalogsAction implements Action {
  readonly type = ActionTypes.LOADS;

  constructor(public payload: any) { }
}

export class LoadCatalogsSuccessAction implements Action {
  readonly type = ActionTypes.LOADS_SUCCESS;

  constructor(public payload: Catalog[]) { }
}

export class LoadCatalogsFailAction implements Action {
  readonly type = ActionTypes.LOADS_SUCCESS;

  constructor(public payload: string) { }
}

export class OpenOrCloseCatalogAction implements Action {
  readonly type = ActionTypes.OPEN_OR_CLOSE;

  constructor(public payload: any) { }
}

export class ActiveCatalogAction implements Action {
  readonly type = ActionTypes.ACTIVE;

  constructor(public payload: any) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadCatalogsAction
  | LoadCatalogsSuccessAction
  | LoadCatalogsFailAction
  | OpenOrCloseCatalogAction;
