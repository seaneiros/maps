import * as types from '../constants/ActionTypes';

const initialState = [];

let placeSeq = 1;

initialState.forEach(i => { if (i.id > placeSeq) placeSeq = i.id; });

const PlacesReducer = function(state = initialState, action) {
  switch(action.type) {

    case types.ADD_PLACE:
      let newState = state.slice(0);
      newState.push(Object.assign(action.place, {id: placeSeq++, markerId: action.markerId}));
      return newState;

    case types.REMOVE_PLACE:
      return state.filter(i => i.id !== action.id);

    case types.SET_PLACE_TITLE:
      return state.map((item) => {
        if (item.id === action.id) item.title = action.title;
        return item; 
      });

    case types.CLEAR_PLACES:
      return state.filter(i => i.markerId !== action.markerId);

  }
  return state;
}

export default PlacesReducer;