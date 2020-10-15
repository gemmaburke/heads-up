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
                <Container fluid className="container2">
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
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79466.3739490183!2d-0.23576814249408082!3d51.50726817963512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876054929181a85%3A0xd1af6c4f49b4bd0c!2sHyde%20Park!5e0!3m2!1spt-PT!2sde!4v1602255902260!5m2!1spt-PT!2sde" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe> */}
                    <MapView markers={this.props.markers} mapDisplay={this.props.mapDisplay}/>
                </Container>
                <Container fluid className="container3">
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
                                    <Button className="rounded-circle" variant="light"><NavLink to="/about" activeClassName="selected"><span className="symbol1">&#9432;</span></NavLink></Button>
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