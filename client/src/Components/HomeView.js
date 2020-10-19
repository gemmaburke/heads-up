import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
                <Container fluid className="container4">
                    <Nav>
                        <Row>
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
            <br/>
        </div>
        )
    }
}

export default HomeView;