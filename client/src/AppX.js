import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Search from './Components/Search';
import About from './Components/About';
import Alerts from './Components/Alerts';
import Support from './Components/Support';
import InsertEntry from './Components/InsertEntry';
import HomeView from './Components/HomeView';
import { Switch, Route, NavLink} from "react-router-dom";
// import { withRouter, Router } from "react-router";

// OpenCage API geocoding:
const opencage = require('opencage-api-client');
// register for your own API key at OpenCageData.com and update in .env file:
const OC_API_KEY = process.env.REACT_APP_OC_API_KEY; 


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      mapDefault: {
        latitude: 54.932,
        longitude: -2.962,
        zoomLevel: 5
      }
    }
  }

  async getGeocode(location) {
    console.log('getGeocode called, searching:', location);
    await opencage
    .geocode({ q: location, key: OC_API_KEY})
    .then (data => {
      // Found at least one result
      if (data.results.length > 0) {
          console.log("Found location: " + data.results[0].formatted);
          const latlng = data.results[0].geometry;
          // return latlng;
      } else alert("Location not found");
    })
    .catch(error => {
      console.log('Error:', error.message);
    });
  }

  // addMarker(newMarker) {
  //   this.setState({ markers: [...this.state.markers, newMarker] });
  //   console.log(this.state.markers);
  // }

  // addAttack(newAttack) {
  //   console.log(newAttack.location);
  //   opencage
  //   .geocode({ q: newAttack.location, key: OC_API_KEY})
  //   .then(data => {
  //     // Found at least one result
  //     if (data.results.length > 0) {
  //         console.log("Found location: " + data.results[0].formatted);
  //         const latlng = data.results[0].geometry;
  //         newAttack.geocode = latlng;
  //         // console.log('location geocoding:', newAttack, newAttack.location);
  //         this.setState({markers: [...this.state.markers, newAttack]});
  //     } else alert("Location not found");
  //   })
  //   .catch(error => {
  //     console.log('Error:', error.message);
  //   });
  //   // newAttack.location = latlng;
  //   // console.log(newAttack, newAttack.location);
  // }

  addAttack(newAttack) {
    // let latlng = this.getGeocode(newAttack.location);
    this.getGeocode(newAttack.location);
    console.log(latlng);
    newAttack.geocode = latlng;
    this.setState({markers: [...this.state.markers, newAttack]});
  }

  setLocation(locationStr) {
    opencage
      .geocode({ q: locationStr, key: OC_API_KEY})
      .then(data => {
        // Found at least one result
        if (data.results.length > 0) {
            console.log("Found location: " + data.results[0].formatted);
            const lat = data.results[0].geometry.lat;
            const lng = data.results[0].geometry.lng;
            // const latlng = data.results[0].geometry;
            // this.addMarker(latlng);
            this.setState({mapDefault: {latitude: lat, longitude: lng, zoomLevel: 10}});
        } else alert("Location not found");
      })
      .catch(error => {
        console.log('Error:', error.message);
      });
  }

  render(){
    return (
      <Container fluid className="container">
        <h1>Heads-Up</h1>
        <Navbar>
          <Nav>
            <Nav.Item as="li">
              <NavLink to="/" exact activeClassName="selected">Home</NavLink>
            </Nav.Item>
            {/*<Nav.Item as="li">
              <Nav.Link to="/strap" activeClassName="selected">strap</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link to="/line" activeClassName="selected">line</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link to="/about" activeClassName="selected">about</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link to="/appservice" activeClassName="selected">app/service</Nav.Link>
    </Nav.Item>*/}
          </Nav>
        </Navbar>

        <Switch>
        
          <Route path='/' exact>
            {/* <HomeView markers={this.state.markers} addMarker={(m) => this.addMarker(m)} mapDisplay={this.state.mapDefault}/> */}
            <HomeView markers={this.state.markers} mapDisplay={this.state.mapDefault}/>
          </Route>
          <Route path='/search'>
            <Search searchLocation={(loc) => this.setLocation(loc)}/>
          </Route>
          <Route path='/addentry'>
            <InsertEntry addAttack={(newAttack) => this.addAttack(newAttack)}/>
          </Route>
          <Route path='/support'>
            <Support />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/alerts'>
            <Alerts />
          </Route>
        </Switch>

      </Container>

      
    );
  }
}

export default App;
