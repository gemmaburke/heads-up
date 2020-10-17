import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapView.css';

class MapView extends React.Component {
  constructor(props) {
      super(props);
      this.mapRef = React.createRef();
      this.state = {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      }
  }

  render(){

    return (
      <div className="MapView">
          <Map ref={this.mapRef} center={[this.props.mapDisplay.latitude, this.props.mapDisplay.longitude]} zoom={this.props.mapDisplay.zoomLevel}>
            <TileLayer attribution={this.state.attribution} url={this.state.url}/>
            {this.props.markers.map((marker, ix) => 
              <Marker key={`marker-${ix}`} position={marker.geocode}>
                <Popup>
                  <span>{marker.date}, {marker.time}</span><br/>
                  <span>{marker.location}</span>
                  <p>{marker.description}</p>
                </Popup>
              </Marker>
            )}
            {this.props.policeData.map((marker, ix) => 
              <Marker key={`marker-${ix}`} position={[marker.location.latitude, marker.location.longitude]}>
                <Popup>
                  <span>{marker.month}</span><br/>
                  <span>{marker.location.street.name}</span><br/>
                  <span>{marker.outcome_status.category}</span>
                </Popup>
              </Marker>
            )}
          </Map>
          <br/>
      </div>
    );
  }
}

export default MapView;