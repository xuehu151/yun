import { Keypair } from './../../domain/keypair';
import { Action } from '@ngrx/store';
import { type } from '../../utils';

export const ActionTypes = {
  LOAD: type('[Keypair] load'),
  LOAD_SUCCESS: type('[Keypair] load_success'),
  LOAD_FAIL: type('[Keypair] load_fail'),
  DELETE: type('[Keypair] delete'),
  DELETE_SUCCESS: type('[Keypair] delete_success'),
  DELETE_FAIL: type('[Keypair] delete_fail'),
};

export class LoadKeypairAction implements Action {
  readonly type = ActionTypes.LOAD;

  constructor(public payload: any) { }
}

export class LoadKeypairSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: Keypair[]) { }
}

export class LoadKeypairFailAction implements Action {
  readonly type = ActionTypes.LOAD_SUCCESS;

  constructor(public payload: string) { }
}

export class DeleteKeypair implements Action {
  readonly type = ActionTypes.DELETE;

  constructor(public payload: Keypair) { }
}

export class DeleteSuccessKeypair implements Action {
  readonly type = ActionTypes.DELETE_SUCCESS;

  constructor(public payload: Keypair) { }
}


export class DeleteFailKeypair implements Action {
  readonly type = ActionTypes.DELETE_FAIL;

  constructor(public payload: string) { }
}



/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = LoadKeypairAction
  | LoadKeypairSuccessAction
  | LoadKeypairFailAction
  | DeleteKeypair
  | DeleteSuccessKeypair
  | DeleteFailKeypair
  ;
