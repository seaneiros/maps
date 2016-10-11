import * as types from '../constants/ActionTypes';

export function setActiveMarker(id) {
  return {
    type: types.SET_ACTIVE_MARKER,
    id
  };
}