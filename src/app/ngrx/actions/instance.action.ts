import { Action } from '@ngrx/store';
import { type } from '../../utils';
import { Instance } from '../../domain/instance';

export const ActionTypes = {
  LOAD: type('[Instance] load'),
  LOAD_SUCCESS: type('[Instance] load_success'),
  LOAD_FAIL: type('[Instance] load_fail'),
};

export class LoadInstanceAction implements Action {
  readonly type = ActionTypes.LOAD;

  constructor(public payload: any) { }
}

export class LoadInstanceSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Instance[]) { }
}

export class LoadInstanceFailAction implements Action {
  readonly type = ActionTypes.LOAD_FAIL;

  constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadInstanceAction
  | LoadInstanceSuccessAction
  | LoadInstanceFailAction;
