import { Action } from '@ngrx/store';
import { Volume } from '../../domain/volume';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum VolumeActionTypes {
  Load = '[Volume] Load',
  LoadSuccess = '[Volume] LoadSuccess',
  LoadFail = '[Volume] LoadFail'
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadAction implements Action {
  readonly type = VolumeActionTypes.Load;

  constructor(public payload: any) { }
}

export class LoadSuccessAction implements Action {
  readonly type = VolumeActionTypes.LoadSuccess;

  constructor(public payload: Volume[]) { }
}

export class LoadFailAction implements Action {
  readonly type = VolumeActionTypes.LoadFail;

  constructor(public payload: string) {

  }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type VolumeActions
  = LoadAction
  | LoadSuccessAction
  | LoadFailAction;

