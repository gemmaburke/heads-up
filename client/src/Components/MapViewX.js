import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapView.css';
// const opencage = require('opencage-api-client');

// register for your own API key at OpenCageData.com and update in .env file:
// const OC_API_KEY = process.env.REACT_APP_OC_API_KEY; 

class MapView extends React.Component {
  constructor(props) {
      super(props);
      this.mapRef = React.createRef();
      this.state = {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        // input: ''
      }
  }

  // updateInput(e) {
  //   this.setState({ input: e.target.value });
  // }

  // Adds marker to map and flies to it with an animation
  // addLocation =() =>{
  //   opencage
  //     .geocode({ q: this.state.input, key: OC_API_KEY})
  //     .then(data => {
  //       // Found at least one result
  //       if (data.results.length > 0) {
  //           console.log("Found location: " + data.results[0].formatted);
  //           const latlng = data.results[0].geometry;
  //           // let markers = this.state.markers;
  //           // markers.push(latlng)
  //           // console.log(latlng);
  //           this.props.addMarker(latlng);
  //           // this.setState({markers: markers, input: ''});
  //           this.setState({input: ''});
  //           let mapInst =  this.mapRef.current.leafletElement;
  //           mapInst.flyTo(latlng, 12);
  //       } else alert("Location not found");
  //     })
  //     .catch(error => {
  //       console.log('Error:', error.message);
  //     });
  // }

  render(){
    return (
      <div className="MapView">
          <Map ref={this.mapRef} center={[this.props.mapDisplay.latitude, this.props.mapDisplay.longitude]} zoom={this.props.mapDisplay.zoomLevel}>
            <TileLayer attribution={this.state.attribution} url={this.state.url}/>
            {/* changed state to props, changing position to marker */}
            {this.props.markers.map((marker, ix) => 
              <Marker key={`marker-${ix}`} position={marker.geocode}>
                <Popup>
                  <span>{marker.date}, {marker.time}</span><br/>
                  <span>{marker.location}</span>
                  <p>{marker.description}</p>
                </Popup>
              </Marker>
            )}
            {/* <Marker position={[this.state.latitude, this.state.longitude]}>
              <Popup>
                Lerwick, Shetland<br/>
                <img width="150" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fcameltravel.co.uk%2Fwp-content%2Fuploads%2F2017%2F09%2FBeach-in-Lerwick.jpg&f=1&nofb=1" alt="Lerwick Lodberries"/>
              </Popup>
            </Marker> */}
          </Map>
          <br/>
          {/* <div>
            <input
              onChange={e => this.updateInput(e)}
              value={this.state.input}
            />
            <button onClick={e => this.addLocation()}>
              Submit your location
            </button>
          </div> */}
      </div>
    );
  }
}

export default MapView;