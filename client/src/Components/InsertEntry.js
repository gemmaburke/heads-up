import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { withRouter } from "react-router";

const opencage = require('opencage-api-client');

const OC_API_KEY = process.env.REACT_APP_OC_API_KEY; 

class InsertEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            date: '',
            time: '',
            location: '',
            description: '',
            lat: '',
            lng: ''
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
        this.props.addAttack(this.state);
        this.setState({date: '', time: '', location: '', description: '', lat: '', lng: ''});
        this.handleShow();
    }

    handleShow = () => {
        this.setState({
           show: true
        })
    }
    
    handleClose = (e) => {
        this.setState({
            show: false
        });
        this.props.history.push('/');
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

    render() {
        return (
            <Container>
                <h2>Add New Entry</h2>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label htmlFor="date">Approximate Date:</Form.Label>
                            <Form.Control
                                required
                                name="date"
                                type="date" 
                                value={this.state.date}
                                onChange={(e) => this.handleChange(e)}
                            />
                        <Form.Label htmlFor="time">Approximate Time:</Form.Label>
                            <Form.Control 
                                required
                                name="time"
                                type="time" 
                                value={this.state.time}
                                onChange={(e) => this.handleChange(e)}
                            />
                        <Form.Label htmlFor="location">Location:</Form.Label>
                            <Form.Control 
                                required
                                name="location"
                                type="text" 
                                value={this.state.location}
                                onChange={(e) => this.handleChange(e)}
                            />
                        <Form.Label htmlFor="description">Description of subject:</Form.Label>
                            <Form.Control
                                name="description"
                                as="textarea" 
                                rows="2"
                                value={this.state.description}
                                onChange={(e) => this.handleChange(e)} />
                            <br/>
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>
                <br/>

                <Modal show={this.state.show} onHide={(e) => this.handleClose(e)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Success!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Your entry was successfully added to our database!</Modal.Body>
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

export default withRouter(InsertEntry);