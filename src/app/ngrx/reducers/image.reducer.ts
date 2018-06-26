import * as actions from '../actions/image.action';
import { Image } from '../../domain';

export interface State {
  images: Image[];
}

export const initialState: State = {
  images: null
};

export function reducer(state = initialState, action: actions.ImageActions): State {
  switch (action.type) {
    case actions.ImageActionTypes.LoadSuccess: {
      return { images: action.payload };
    }
    default: {
      return state;
    }
  }
}

export const getImages = (state: State) => state.images;


