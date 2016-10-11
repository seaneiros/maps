import * as types from '../constants/ActionTypes';

const initialState = [];

let markerSeq = 1;

initialState.forEach(i => { if (i.id > markerSeq) markerSeq = i.id; });

const MarkersReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.ADD_MARKER:
      let newState = state.slice(0);
      newState.push(Object.assign(action.marker, {id: markerSeq++}));
      return newState;

    case types.REMOVE_MARKER:
      return state.filter(i => i.id !== action.id);

    case types.SET_MARKER_TITLE:
      return state.map((item) => {
        if (item.id === action.id) item.title = action.title;
        return item; 
      });

    case types.CLEAR_MARKERS:
      return [];

  }

  return state;
};

export default MarkersReducer;