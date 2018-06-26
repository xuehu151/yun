import { Instance } from './../../domain/instance';
import { Action } from '@ngrx/store';
import * as actions from '../actions/instance.action';
import { createSelector } from '@ngrx/store';

export interface State {
  instances: Instance[];
}

export const initialState: State = {
  instances: []
};


export function reducer(state: State = initialState, action: actions.Actions): State {
  switch (action.type) {

    case actions.ActionTypes.LOAD_SUCCESS:
      return { instances: action.payload };
    default:
      return state;
  }
}


/*
    Below are the selectors for this reducer. Make sure to make compact selectors as per
    requirements of your application.
*/

export const getInstances = (state: State) => state.instances;
