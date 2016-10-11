import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { addMarkerToMap } from '../actions/MarkersActions';
import store from '../store';

class Map extends Component {

  constructor(props) {
    super(props);
    this.loadMap = this.loadMap.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
    this.state = {
      map: null
    };
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    const mapsAPI = google.maps;
    const mapNode = ReactDOM.findDOMNode(this.refs.map);

    let {initCenter, zoom, mapClickHandler} = this.props;
    
    let mapInstance = new mapsAPI.Map(mapNode, {
      zoom:   zoom,
      center: initCenter
    });

    mapInstance.addListener('click', e => {
      let markerTitle = prompt('Название метки:', '');

      if (!markerTitle) return;

      let markerProps = {
        position: e.latLng.toJSON(),
        title:    markerTitle
      };

      store.dispatch(addMarkerToMap(markerProps));
      mapInstance.panTo(markerProps.position);
    });

    this.setState({
      map: mapInstance
    });
  }

  renderChildren() {
    const self = this;
    const {children} = this.props;

    if (!children || !self.state.map) return;

    return React.Children.map(children, i => {
      return React.cloneElement(i, {
        map:     self.state.map,
        mapsAPI: google.maps
      });
    });
  }

  render() {
    return (
      <div className="g-map" ref="map">
        Loading map...
        {this.renderChildren()}
      </div>
    );
  }
}

Map.propTypes = {
  zoom:       React.PropTypes.number,
  initCenter: React.PropTypes.object
};

Map.defaultProps = {
  zoom:       4,
  initCenter: {lat: -25.363882, lng: 131.044922 }
};

export default Map;