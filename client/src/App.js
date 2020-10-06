import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Search from './Components/Search';
import About from './Components/About';
import Alerts from './Components/Alerts';
import Forum from './Components/Forum';
import Support from './Components/Support';
import InsertEntry from './Components/InsertEntry';
import HomeView from './Components/HomeView';
import { Switch, Route, NavLink} from "react-router-dom";
import { withRouter, Router } from "react-router";


class App extends React.Component {
  render(){
    return (
      <Container className="container">
        <h1>Heads-Up</h1>
        <Navbar>
          <Nav>
            <Nav.Item as="li">
              <NavLink to="/" exact activeClassName="selected">Home</NavLink>
            </Nav.Item>
            <Nav.Item as="li">
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
            </Nav.Item>
          </Nav>
        </Navbar>
        <Switch>
        
          <Route path='/' exact>
            <HomeView />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/addentry'>
            <InsertEntry />
          </Route>
          <Route path='/support'>
            <Support />
          </Route>
          <Route path='/forum'>
            <Forum />
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
