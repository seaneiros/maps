import React, {Component} from 'react';

import List from './List/List.jsx';

import {removeMarkerFromMap, setMarkerTitle, clearMarkers} from '../actions/MarkersActions';
import {clearMarkerPlaces} from '../actions/PlacesActions';
import {setActiveMarker} from '../actions/ActiveMarkerActions';
import store from '../store';

function deleteHandler(marker) {
  if (confirm('Удалить маркер?')) {
    store.dispatch(removeMarkerFromMap(marker.id));
    store.dispatch(clearMarkerPlaces(marker.id));
  }
}

function saveHandler(marker) {
  let title = prompt('Новое название метки','');
  if (!!title) store.dispatch(setMarkerTitle(marker.id, title));
}

function clearHandler() {
  if (confirm('Очистить список меток?')) {
    store.dispatch(clearMarkers());
  }
}

function setActiveHandler(marker) {
  store.dispatch(setActiveMarker(marker.id));
}

class MarkerList extends Component {
  render() {
    return (
      <List elements={this.props.markers}
            emptyText='Список маркеров пуст'
            listClassName="marker-list"        
            itemClassName="marker-list__item"        
            showAddButton={false}
            deleteButtonClassName="marker-list__delete"
            editButtonClassName="marker-list__edit"
            clearButtonClassName="marker-list__clear"
            deleteButtonClick={deleteHandler}
            saveButtonClick={saveHandler}
            clearButtonClick={clearHandler}
            itemClick={(marker) => { setActiveHandler(marker);this.props.map.panTo(marker.position); }}/>
    );
  }
}

export default MarkerList;