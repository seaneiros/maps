import { createStore, combineReducers } from 'redux';

import MarkersReducer from './reducers/MarkersReducer';
import ActiveMarkerReducer from './reducers/ActiveMarkerReducer';
import PlacesReducer from './reducers/PlacesReducer';

const reducers = combineReducers({
  markers:      MarkersReducer,
  places:       PlacesReducer,
  activeMarker: ActiveMarkerReducer
});

const store = createStore(reducers);

export default store;