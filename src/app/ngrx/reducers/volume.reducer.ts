import * as actions from '../actions/volume.action';
import { Volume } from '../../domain/volume';

export interface State {
  volumes: Volume[];
}

export const initialState: State = {
  volumes: null
};

export function reducer(state = initialState, action: actions.VolumeActions): State {
  switch (action.type) {
    case actions.VolumeActionTypes.LoadSuccess: {
      return { volumes: action.payload };
    }
    default: {
      return state;
    }
  }
}

export const getVolumes = (state: State) => state.volumes;
