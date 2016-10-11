import * as types from '../constants/ActionTypes';

const initialState = null;

const ActiveMarkerReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.SET_ACTIVE_MARKER:
      return action.id;
  }
  return state;
}

export default ActiveMarkerReducer;