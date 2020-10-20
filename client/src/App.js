import React from 'react';
import './App.css';
//import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Search from './Components/Search';
import About from './Components/About';
import Alerts from './Components/Alerts';
import Support from './Components/Support';
import InsertEntry from './Components/InsertEntry';
import HomeView from './Components/HomeView';
import { Switch, Route, NavLink, Link} from "react-router-dom";
import { withRouter } from "react-router";
import House from './House.jpg';
import Banner from './headsuplogo.jpg';
const opencage = require('opencage-api-client');

// register for your own API key at OpenCageData.com and update in .env file:
const OC_API_KEY = process.env.REACT_APP_OC_API_KEY; 
const POLICE_API_URL = 'https://data.police.uk/api/crimes-street/violent-crime?';
const POLICE_API_SEARCH = 'https://data.police.uk/api/crimes-at-location?';
const ASSAULTS_URL = "http://localhost:5000/assaults";

// initialises map to wide view of London
const MAP_INIT = {
  latitude: 51.510,
  longitude: -0.129,
  zoomLevel: 11
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assaults: [],
      markers: [],
      policeData: [],
      mapDefault: MAP_INIT
    }
  }

  componentDidMount() {
    fetch(ASSAULTS_URL)
      .then(res => res.json())
      .then(json => {
        // upon sucess, update assaults
        this.initPoliceData();
        this.setState({ assaults: json });
        // console.log(this.state.assaults);
      })
      .catch(error => {
        // upon failure, show error message
        console.log("ERROR in componentDidMount():", error);
      });
  }

  async initPoliceData() {
    let url = `${POLICE_API_URL}poly=51.443095,-0.272856:51.619854,-0.128778:51.427574,-0.101305`;
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        let reducedData = [];
        // limit the volume of data from police API violent crimes search
        for (let i=0; i < 50; i++) {
          reducedData.push(data[i])
        };
        this.setState({policeData: reducedData});
      } else {
        console.log(`ERROR: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`EXCEPTION: ${err.message}`);
    }
  }

  async searchPoliceData(q) {
    let date = q.date.slice(0, q.date.length-3);
    if (date) {
      let dateDecimal = date.replace('-', '.');
      let dateNum = parseFloat(dateDecimal);
      if (dateNum > 2020.08) {
        this.setState({policeData: []});
        return;
      };
    };
    let lat = q.lat;
    let lng = q.lng;
    let url = '';
    if (date && lat && lng) {
      url = `${POLICE_API_SEARCH}date=${date}&lat=${lat}&lng=${lng}`;
    } else if (lat && lng) {
      url = `${POLICE_API_SEARCH}date=2020-08&lat=${lat}&lng=${lng}`;
    } else {
      url = `${POLICE_API_URL}poly=51.443095,-0.272856:51.619854,-0.128778:51.427574,-0.101305&date=${date}`;
    };
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        if (data.length > 50) {
          let dataReduced = [];
          for (let i=0; i < 50; i++) {
            dataReduced.push(data[i]);
            this.setState({policeData: dataReduced});
          }
        } else {
          this.setState({policeData: data});
        }
        // console.log(this.state.policeData);
      } else {
        console.log(`ERROR: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`EXCEPTION: ${err.message}`);
    }
  }

  addAttack(newAttack) {
    console.log(newAttack);
    fetch(ASSAULTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAttack),
    })
    .then(res => res.json())
    .then(json => {
      this.setState({assaults: [...this.state.assaults, json]});
      console.log(this.state.assaults);
    })
    .catch((err) => console.log(err));
  }

  getGeocode(query) {
    let date = query.date;
    let location = query.location;
    opencage
      .geocode({ q: location, key: OC_API_KEY})
      .then(data => {
        if (data.results.length > 0) {
            console.log("Found location: " + data.results[0].formatted);
            const lat = data.results[0].geometry.lat;
            const lng = data.results[0].geometry.lng;
            this.searchPoliceData({date, lat, lng});
        } else alert("Location not found");
      })
      .catch(error => {
        console.log('Error:', error.message);
      });
  }

  search(q) {
    // console.log(q);
    let date = q.date;
    let location = q.location;
    let searchParams = '';
    if (date && location) {
      searchParams = `date=${date}&location=${location}`;
      this.getGeocode(q);
    } else if (date) {
      searchParams = `date=${date}`;
      this.searchPoliceData(q);
    } else {
      searchParams = `location=${location}`;
      this.getGeocode(q);
    };
    fetch(`${ASSAULTS_URL}/search?${searchParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => res.json())
    .then(json => {
      this.setState({assaults: json});
    })
    .catch((err) => console.log(err));
  }

  resetMap() {
    this.setState({mapDefault: MAP_INIT});
    this.componentDidMount();
  }

  render(){
    return (
      <div>
        <Container fluid className="container1">
          <Container fluid className="container2">
            <Row>
              <Col lg="2">
                <img src={Banner} alt="Logo" />
              </Col>
              <Col>
                <h1>Heads-Up</h1>
                <h2 id="white">Helping London stay safe from sexual assault</h2>
              </Col>
            </Row>
          </Container>
        
          <Switch>
            <Route path='/' exact>
              <HomeView
                assaults={this.state.assaults}
                policeData={this.state.policeData}
                mapDisplay={this.state.mapDefault}
                resetMap={e => this.resetMap()}
              />
            </Route>
            <Route path='/search'>
              <Search assaults={this.state.assaults} search={(q) => this.search(q)}/>
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

          <Container fluid className="container4">
            <Nav>
              <Row>
                <Col>
                <Nav.Item as="li">
                  <Button className="rounded-circle" variant="light"><NavLink to="/" exact activeClassName="selected"><Image src={House} alt="Home" className="image" /></NavLink></Button>
                  <h5>Home</h5>
                </Nav.Item>
                </Col>
                <Col>
                  <Nav.Item as="li">
                    <Button className="rounded-circle" variant="light"><NavLink to="/support" activeClassName="selected"><span className="symbol1">&hearts;</span></NavLink></Button>
                    <h5>Support</h5>
                  </Nav.Item>
                </Col>
                <Col>
                  <Nav.Item as="li">                    
                    <Button className="rounded-circle" variant="light"><a href="https://headup.freeforums.net/" target="_blank" rel="noopener noreferrer"><span className="symbol">&#128490;</span></a></Button>
                    <h5>Forum</h5>
                  </Nav.Item>
                </Col>
                <Col>
                  <Nav.Item as="li">
                    <Button className="rounded-circle" variant="light"><NavLink to="/about" activeClassName="selected"><span className="symbol">&#9432;</span></NavLink></Button>
                    <h5>About</h5>
                  </Nav.Item>
                </Col>
                <Col>
                  <Nav.Item as="li">
                    <Button className="rounded-circle" variant="light"><NavLink to="/alerts" activeClassName="selected"><span className="symbol">&#33;</span></NavLink></Button>
                    <h5>Alerts</h5>
                  </Nav.Item>
                </Col>
              </Row>
            </Nav>
          </Container>  
        </Container>
      </div>
    );
  }
}

export default withRouter(App);
