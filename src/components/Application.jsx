import React, {Component} from 'react';
import { connect } from 'react-redux';

import store from '../store';

import Map from './Map.jsx';
import Marker from './Marker.jsx';

import MarkerList from './MarkerList.jsx';
import PlacesList from './PlacesList.jsx';

require('../styles/main.less');

const initialPosition = {
  lat: 56,
  lng: 60
};

if (!!navigator) {
  navigator.geolocation.getCurrentPosition((pos) => {
    initialPosition.lat = pos.coords.latitude;
    initialPosition.lng = pos.coords.longitude;
  }, 
  (err) => {
    console.log(err);
  });
}

class Application extends Component {
  render() {

    let markers = this.props.markers.map(i => Object.assign({selected: i.id === this.props.activeMarker}, i));
    let places = this.props.places.filter(i => i.markerId === this.props.activeMarker);

    return (
      <div className="application">
        <div className="application__body">
          <Map initCenter={initialPosition} zoom={10}>
            {this.props.markers.map(i => <Marker key={i.id} id={i.id} position={i.position} title={i.title}/>)}
            <MarkerList markers={markers} activeMarker={this.props.activeMarker}/>
          </Map>
          {markers.some(i => i.id === this.props.activeMarker) ? <PlacesList places={places} activeMarker={this.props.activeMarker}/> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    markers:      store.markers,
    activeMarker: store.activeMarker,
    places:       store.places
  };
};

export default connect(mapStateToProps)(Application);