import { NgModule } from '@angular/core';
import { Action, StoreModule, ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromCatalog from './catalog.reducer';
import * as fromOverview from './overview.reducer';
import * as fromInstance from './instance.reducer';
import * as fromKeypair from './keypair.reducer';
import * as fromVolume from './volume.reducer';
import * as fromImage from './image.reducer';

export interface State {
  auth: fromAuth.State;
  catalog: fromCatalog.State;
  instance: fromInstance.State;
  overview: fromOverview.State;
  keypair: fromKeypair.State;
  volume: fromVolume.State;
  image: fromImage.State;
}

export const initialState: State = {
  auth: fromAuth.initialState,
  catalog: fromCatalog.initialState,
  instance: fromInstance.initialState,
  overview: fromOverview.initialState,
  keypair: fromKeypair.initialState,
  volume: fromVolume.initialState,
  image: fromImage.initialState,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  catalog: fromCatalog.reducer,
  instance: fromInstance.reducer,
  overview: fromOverview.reducer,
  keypair: fromKeypair.reducer,
  volume: fromVolume.reducer,
  image: fromImage.reducer
};

export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  return localStorageSync({ keys: ['auth', 'catalog', 'instance'], rehydrate: true })(reducer);
}

const metaReducers: MetaReducer<State>[] = !environment.production ?
  [storeFreeze] : [];
metaReducers.push(localStorageSyncReducer);

/*
    Below are the selectors for this reducer. Make sure to make compact selectors as per
    requirements of your application.
*/

export const getAuthState = (state: State) => state.auth;
export const getCatalogState = (state: State) => state.catalog;
export const getOverviewState = (state: State) => state.overview;
export const getInstanceState = (state: State) => state.instance;
export const getKeyPairState = (state: State) => state.keypair;
export const getVolumeState = (state: State) => state.volume;
export const getImageState = (state: State) => state.image;

export const getAuth = createSelector(getAuthState, fromAuth.getAuth);
export const getCatalogs = createSelector(getCatalogState, fromCatalog.getCatalogs);
export const getCatalogsActive = createSelector(getCatalogState, fromCatalog.getCatalogsActive);
export const getOverviews = createSelector(getOverviewState, fromOverview.getOverviews);
export const getInstances = createSelector(getInstanceState, fromInstance.getInstances);
export const getKeypair = createSelector(getKeyPairState, fromKeypair.getKeyPairs);
export const getVolumes = createSelector(getVolumeState, fromVolume.getVolumes);
export const getImages = createSelector(getImageState, fromImage.getImages);

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ]
})
export class AppStoreModule {

}
