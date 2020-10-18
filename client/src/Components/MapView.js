import React from 'react';
import { Map, TileLayer, Popup } from 'react-leaflet';
import Marker from 'react-leaflet-enhanced-marker';
import './MapView.css';
import pinRed from './pin.png';
import pinBlue from './pin-blue.png';

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
                  <Marker
                    icon={<img src={pinRed} style={{width:'20px'}} alt="marker icon"/>}
                    key={assault.id}
                    position={[assault.lat, assault.lng]}
                  >
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
          <div align="center">
            <p>
              <span><img src={pinRed} style={{width: '20px'}} alt="marker icon"/> &nbsp;Registered attacks &nbsp; &nbsp;</span>
              <span><img src={pinBlue} style={{width: '20px'}} alt="marker icon"/> &nbsp;Police data</span>
            </p>
            <br/>
          </div>
      </div>
    );
  }
}

export default MapView;