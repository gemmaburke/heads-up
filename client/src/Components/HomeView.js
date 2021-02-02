import React from 'react';
import Nav from 'react-bootstrap/Nav';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
// import { Switch, Route, NavLink} from "react-router-dom";
import {NavLink} from "react-router-dom";
import MapView from './MapView';
import './HomeView.css';


class HomeView extends React.Component {
    
    render() {
        return (
            <div>
                <Container fluid className="container3">
                    <Nav className="nav">
                        <Nav.Item as="li">
                            <NavLink to="/search" activeClassName="selected">Search</NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <NavLink to="/addentry" activeClassName="selected">Add entry</NavLink>
                        </Nav.Item>
                        <Nav.Item as="li" onClick={this.props.resetMap} className="resetLink">
                            Reset View
                        </Nav.Item>
                    </Nav>
                    <MapView assaults={this.props.assaults} policeData={this.props.policeData} mapDisplay={this.props.mapDisplay}/>
                </Container>
                
            <br/>
        </div>
        )
    }
}

export default HomeView;