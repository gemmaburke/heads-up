import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
//import Emailjs from './Emailjs';
import emailjs from 'emailjs-com';
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";
const opencage = require('opencage-api-client');

const OC_API_KEY = process.env.REACT_APP_OC_API_KEY; 

class Alerts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            user_email: '',
            location: '',
            contact_number: '',
            lat: 0,
            lng: 0,
            show: false
        }
    }

    handleChange = (event) => {
        const {target: {name, value}} = event;
        this.setState({
            [name]: value
        });
    }

    async handleSubmit(event) {
        //event.preventDefault();
        await this.getGeocode();
        let newUser = {user_name: this.state.user_name, user_email: this.state.user_email, lat: this.state.lat, lng: this.state.lng};
        this.props.addUser(newUser);
        this.setState({user_name: '', user_email: '', location: '', contact_number: '', lat: '', lng: ''});
        this.handleShow();
    }

    async getGeocode() {
        await opencage
        .geocode({ q: this.state.location, key: OC_API_KEY})
        .then(data => {
        if (data.results.length > 0) {
            console.log("Found location: " + data.results[0].formatted);
            const lat = data.results[0].geometry.lat;
            const lng = data.results[0].geometry.lng;
            this.setState({lat: lat, lng: lng});
        } else alert("Location not found");
        })
        .catch(error => {
        console.log('Error:', error.message);
        });
    }
    
    handleClose = (e) => {
        this.setState({
            show: false
        });
        this.props.history.push('/');
    }

    handleShow = () => {
        this.setState({
           show: true
        })
    }  
    
    sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_2nxqn7h', 'template_1abvtkq', e.target, 'user_qwRxC6MyQfWVRgEQp98Nm')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        this.handleSubmit();

    };

    render() {
        return (
            <Container fluid className="container2">
                <h2>Register for Alerts</h2>
                <Form className="contact-form" onSubmit={(e) => this.sendEmail(e)}>
                    <Form.Group>
                        <Form.Label htmlFor="user_name">Name</Form.Label>
                            <Form.Control
                                required
                                name="user_name"
                                type="text" 
                                value={this.state.user_name}
                                onChange={(e) => this.handleChange(e)}
                            />
                            <Form.Label htmlFor="user_email">Email-Address</Form.Label>
                            <Form.Control
                                required
                                name="user_email"
                                type="email" 
                                value={this.state.user_email}
                                onChange={(e) => this.handleChange(e)}
                            />
                        <Form.Label htmlFor="contact_number">Phone Number</Form.Label>
                            <Form.Control
                                required
                                name="contact_number"
                                type="text" 
                                value={this.state.contact_number}
                                onChange={(e) => this.handleChange(e)}
                        />
                        <Form.Label htmlFor="address">Address</Form.Label>
                            <Form.Control 
                                required
                                name="location"
                                type="text"
                                value={this.state.location} 
                                onChange={(e) => this.handleChange(e)}
                            />
                        <br />
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>
                <br/>
                <Modal show={this.state.show} onHide={(e) => this.handleClose(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Success!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your e-mail, phone number and address have been successfully added to our database. You will start getting our alerts soon.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={(e) => this.handleClose(e)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/*<Switch>
                    <Route path='/alerts'>
                        <Emailjs />
                    </Route>
                </Switch>*/}
            </Container>
        )
    }
}

export default withRouter(Alerts);