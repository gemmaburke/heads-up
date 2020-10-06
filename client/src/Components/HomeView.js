import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Switch, Route, NavLink} from "react-router-dom";


class HomeView extends React.Component {
    render() {
        return (
            <div>
                <div className="container2">
                    <Nav>
                        <Nav.Item as="li">
                            <NavLink to="/search" activeClassName="selected">Search</NavLink>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <NavLink to="/addentry" activeClassName="selected">Add entry</NavLink>
                        </Nav.Item>
                    </Nav>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9710.53180195673!2d13.404551268134107!3d52.5219813798145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1edb11286f%3A0x30fc01c366e4166e!2sAlexanderplatz!5e0!3m2!1spt-PT!2sde!4v1601816144027!5m2!1spt-PT!2sde" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className="container3">
                    <Nav>
                        <Row md={4}>
                            <Col>
                                <Nav.Item as="li">
                                    <Button className="rounded-circle" variant="light"><NavLink to="/support" activeClassName="selected"><span className="symbol">&hearts;</span></NavLink></Button>
                                    <h5>Support</h5>
                                </Nav.Item>
                            </Col>
                            <Col>
                                <Nav.Item as="li">                    
                                    <Button className="rounded-circle" variant="light"><NavLink to="/forum" activeClassName="selected"><span className="symbol">&#128490;</span></NavLink></Button>
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
                </div>  
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        )
    }
}

export default HomeView;