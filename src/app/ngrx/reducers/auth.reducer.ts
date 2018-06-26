import { Err } from './../../domain/error';
import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { Auth } from '../../domain';
import * as actions from '../actions/auth.action';

export interface State {
  auth: Auth;
}

export const initialState: State = {
  auth: null
};


export function reducer(state: State = initialState, action: actions.Actions): State {
  switch (action.type) {

    case actions.ActionTypes.LOGIN_SUCCESS:
      const auth: Auth = <Auth>action.payload;
      return {
        auth: {
          userId: auth.user.id,
          user: auth.user,
          token: auth.token
        }
      };
    case actions.ActionTypes.LOGIN_FAIL:
      const err = <Err>action.payload;
      return { auth: { err } };
    default:
      return state;
  }
}


/*
    Below are the selectors for this reducer. Make sure to make compact selectors as per
    requirements of your application.
*/

export const getAuth = (state: State) => state.auth;
