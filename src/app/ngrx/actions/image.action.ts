import { Action } from '@ngrx/store';
import { Image } from '../../domain';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ImageActionTypes {
  Load = '[Image] Load',
  LoadSuccess = '[Image] LoadSuccess',
  LoadFail = '[Image] LoadFail'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadAction implements Action {
  readonly type = ImageActionTypes.Load;

  constructor(public payload: any) { }
}

export class LoadSuccessAction implements Action {
  readonly type = ImageActionTypes.LoadSuccess;

  constructor(public payload: Image[]) { }
}

export class LoadFailAction implements Action {
  readonly type = ImageActionTypes.LoadFail;

  constructor(public payload: string) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ImageActions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;
