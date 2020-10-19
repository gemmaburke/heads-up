import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { withRouter } from "react-router";
const opencage = require('opencage-api-client');

const OC_API_KEY = process.env.REACT_APP_OC_API_KEY; 

class Alerts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            location: '',
            phone: '',
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
        event.preventDefault();
        await this.getGeocode();
        let newUser = {email: this.state.email, lat: this.state.lat, lng: this.state.lng};
        this.props.addUser(newUser);
        this.setState({email: '', location: '', phone: '', lat: '', lng: ''});
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

    render() {
        return (
            <Container fluid className="container2">
                <h2>Register for Alerts</h2>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label htmlFor="email">Insert Your Email-Address</Form.Label>
                            <Form.Control
                                required
                                name="email"
                                type="email" 
                                value={this.state.email}
                                onChange={(e) => this.handleChange(e)}
                            />
                            <Form.Label htmlFor="phone">Insert Your Phone Number</Form.Label>
                            <Form.Control
                                required
                                name="phone"
                                type="text" 
                                value={this.state.phone}
                                onChange={(e) => this.handleChange(e)}
                            />
                        <Form.Label htmlFor="address">Insert Address</Form.Label>
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
            </Container>
        )
    }
}

export default withRouter(Alerts);