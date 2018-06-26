import { OverView } from './../../domain/overview';
import { Action } from '@ngrx/store';
import { type } from '../../utils';
export const ActionTypes = {
  LOAD: type('[overview] LoadOverView'),
  LOAD_SUCCESS: type('[overview] LoadOverViewSuccess'),
  LOAD_FAILURE: type('[overview] LoadOverViewFailure')
};

export class LoadOverViewAction implements Action {
  readonly type = ActionTypes.LOAD;

  constructor(public payload: any) { }
}

export class LoadOverViewSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: OverView[]) { }
}

export class LoadOverViewFailureAction implements Action {
  readonly type = ActionTypes.LOAD_FAILURE;

  constructor(public payload: string) { }
}

export type Actions =
  LoadOverViewAction |
  LoadOverViewSuccessAction |
  LoadOverViewFailureAction;
