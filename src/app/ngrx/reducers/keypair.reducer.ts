import { Keypair } from './../../domain/keypair';
import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

import * as actions from '../actions/keypair.action';

export interface State {
  keypairs: Keypair[];
}

export const initialState: State = {
  keypairs: []
};


export function reducer(state: State = initialState, action: actions.Actions): State {
  switch (action.type) {

    case actions.ActionTypes.LOAD_SUCCESS:
      // your action code here
      return { keypairs: action.payload };

    default:
      return state;
  }
}


/*
    Below are the selectors for this reducer. Make sure to make compact selectors as per
    requirements of your application.
*/

export const getKeyPairs = (state: State) => state.keypairs;

