import * as types from '../constants/ActionTypes';

export function addPlaceToMarker(markerId, place) {
  return {
    type: types.ADD_PLACE,
    markerId,
    place
  };
}

export function removePlace(id) {
  return {
    type: types.REMOVE_PLACE,
    id
  };
}

export function setPlaceTitle(id, title) {
  return {
    type: types.SET_PLACE_TITLE,
    id,
    title
  };
}

export function clearMarkerPlaces(markerId) {
  return {
    type: types.CLEAR_PLACES,
    markerId
  };
}