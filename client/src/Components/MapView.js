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
            {
              this.props.assaults.length > 0
              ?
                this.props.assaults.map((assault) => 
                  <Marker key={assault.id} position={[assault.lat, assault.lng]} fillColor="red">
                    <Popup>
                      <span>{assault.date}, {assault.time}</span><br/>
                      <span>{assault.location}</span>
                      <p>{assault.description}</p>
                    </Popup>
                  </Marker>
                )
              : <></>
            }
            {
              this.props.policeData.map((assault, ix) => 
                <Marker key={ix} position={[assault.location.latitude, assault.location.longitude]}>
                  <Popup>
                    <span>{assault.month}</span><br/>
                    <span>{assault.location.street.name}</span>
                    {/* <span>{assault.outcome_status.category}</span> */}
                  </Popup>
                </Marker>
              )
            }
          </Map>
          <br/>
      </div>
    );
  }
}

export default MapView;