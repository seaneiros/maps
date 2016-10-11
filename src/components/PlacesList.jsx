import React, {Component} from 'react';

import List from './List/List.jsx';

import {addPlaceToMarker,removePlace,setPlaceTitle,clearMarkerPlaces} from '../actions/PlacesActions';
import store from '../store';

function addHandler(markerId) {
  if (!markerId) {
    alert('Сначала нужно выбрать маркер');
    return;
  }
  let title = prompt('Название нового места','');
  if (!!title) store.dispatch(addPlaceToMarker(markerId, {title: title}));
}

function deleteHandler(place) {
  if (confirm('Удалить отметку о месте?')) {
    store.dispatch(removePlace(place.id));
  }
}

function saveHandler(place) {
  let title = prompt('Название нового места','');
  if (!!title) store.dispatch(setPlaceTitle(place.id, title));
}

function clearHandler(markerId) {
  if (confirm('Очистить список мест?')) {
    store.dispatch(clearMarkerPlaces(markerId));
  }
}

class PlacesList extends Component {
  render() {
    return (
      <List elements={this.props.places}
            emptyText='Список мест пуст'
            listClassName="place-list"        
            itemClassName="place-list__item"
            addButtonClassName="place-list__add"
            deleteButtonClassName="place-list__delete"
            editButtonClassName="place-list__edit"
            clearButtonClassName="place-list__clear"
            addButtonClick={() => { addHandler(this.props.activeMarker); }}
            deleteButtonClick={deleteHandler}
            saveButtonClick={saveHandler}
            clearButtonClick={() => { clearHandler(this.props.activeMarker); }}/>
    );
  }
}

export default PlacesList;