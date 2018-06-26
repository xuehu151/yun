import { OverView } from './../../domain/overview';
import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as actions from '../actions/overview.action';

export interface State {
  overview: OverView[];
}

export const initialState: State = {
  overview: []
};


export function reducer(state: State = initialState, action: actions.Actions): State {
  switch (action.type) {

    case actions.ActionTypes.LOAD_SUCCESS:
      // your action code here
      return { overview: [...action.payload] };
    default:
      return state;
  }
}


/*
    Below are the selectors for this reducer. Make sure to make compact selectors as per
    requirements of your application.
*/

export const getOverviews = (state: State) => state.overview;

