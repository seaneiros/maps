import * as types from '../constants/ActionTypes';

export function addMarkerToMap(marker) {
  return {
    type: types.ADD_MARKER,
    marker
  };
}

export function removeMarkerFromMap(id) {
  return {
    type: types.REMOVE_MARKER,
    id
  };
}

export function setMarkerTitle(id, title) {
  return {
    type: types.SET_MARKER_TITLE,
    id,
    title
  };
}

export function clearMarkers() {
  return {
    type: types.CLEAR_MARKERS
  };
}