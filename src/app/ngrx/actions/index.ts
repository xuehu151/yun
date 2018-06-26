import * as authActions from './auth.action';
import * as catalogAction from './catalog.action';
import * as overviewAction from './overview.action';
import * as instanceAction from './instance.action';
import * as keypairAction from './keypair.action';
import * as volumeAction from './volume.action';

export const ActionTypes = {
  auth: authActions.ActionTypes,
  catalog: catalogAction.ActionTypes,
  overview: overviewAction.ActionTypes,
  instance: instanceAction.ActionTypes,
  keypair: keypairAction.ActionTypes,
  volume: volumeAction.VolumeActionTypes,
};

export const Actions = {
  auth: authActions,
  catalog: catalogAction,
  overview: overviewAction,
  instance: instanceAction,
  keypair: keypairAction,
  volume: volumeAction,
};
