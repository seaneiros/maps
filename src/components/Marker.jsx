import React, {Component} from 'react';

import InfoWindow from '../utils/InfoWindow';
import { setActiveMarker } from '../actions/ActiveMarkerActions';
import store from '../store';

class Marker extends Component {
  
  constructor(props) {
    super(props);
    this.addMarker = this.addMarker.bind(this);
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.marker) {
      if (this.props.map !== prevProps.map) this.marker.setMap(this.props.map);
      if (this.props.position !== prevProps.position) this.marker.setPosition(this.props.position);
      if (this.props.title !== prevProps.title) this.marker.setTitle(this.props.title);
    } else {
      this.addMarker();
    }
  }

  componentDidMount() {
    this.addMarker();
  }
  
  addMarker() {
    let {mapsAPI, map, position, title, id} = this.props;

    let marker = new mapsAPI.Marker({
      map:      map,
      position: new mapsAPI.LatLng(position.lat, position.lng),
      title:    title
    });

    marker.addListener('click', function() {
      InfoWindow.setContent(marker.getTitle());
      InfoWindow.open(map, marker);
      map.panTo(marker.getPosition());
      store.dispatch(setActiveMarker(id));
    });

    this.marker = marker; 
  }

  componentWillUnmount() {
    if (this.marker) {
      this.marker.setMap(null);
    }
  }

  render() {
    return null;
  }
  
}

Marker.propTypes = {
  position: React.PropTypes.object,
  map:      React.PropTypes.object
};

export default Marker;