import { Catalog } from './../../domain/catalog';
import { Action } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as actions from '../actions/catalog.action';
export interface State {
  catalogs: Catalog[];
  active: number;
}

export const initialState: State = {
  catalogs: [],
  active: 0,
};


export function reducer(state: State = initialState, action: actions.Actions): State {
  switch (action.type) {
    case actions.ActionTypes.LOADS_SUCCESS:
      return { ...state, catalogs: action.payload };
    case actions.ActionTypes.OPEN_OR_CLOSE:
      return { ...state, catalogs: openOrCloseCatalog(state, action.payload) };
    case actions.ActionTypes.ACTIVE:
      return { ...state, active: action.payload.id };
    default:
      return state;
  }
}

export function openOrCloseCatalog(state: State, i: number) {
  const catalogs = state.catalogs;
  const catalog: Catalog = {
    name: catalogs[i].name,
    url: catalogs[i].url,
    children: catalogs[i].children,
    open: !catalogs[i].open
  };
  return [...catalogs.slice(0, i), catalog, ...catalogs.slice(i + 1)];
}




/*
    Below are the selectors for this reducer. Make sure to make compact selectors as per
    requirements of your application.
*/

export const getCatalogs = (state: State) => state.catalogs;
export const getCatalogsActive = (state: State) => state.active;


