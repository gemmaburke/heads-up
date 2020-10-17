import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
            lat: 0,
            lng: 0
        }
    }

    handleChange = (event) => {
        const {target: {name, value}} = event;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // below doesn't work because it completes handleSubmit before completing getGeocode (with updated state)
        this.getGeocode();
        console.log('Submitted:', this.state);
        this.props.addAttack(this.state);
        this.setState({date: '', time: '', location: '', description: '', lat: 0, lng: 0});
    }

    getGeocode() {
        opencage
        .geocode({ q: this.state.location, key: OC_API_KEY})
        .then(data => {
        if (data.results.length > 0) {
            console.log("Found location: " + data.results[0].formatted);
            const lat = data.results[0].geometry.latitude;
            const lng = data.results[0].geometry.longitude;
            this.setState({lat: lat, lng: lng});
            // this.props.history.push('/');
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
                                name="date"
                                type="date" 
                                value={this.state.date}
                                onChange={(e) => this.handleChange(e)}
                            />
                        <Form.Label htmlFor="time">Approximate Time:</Form.Label>
                            <Form.Control 
                                name="time"
                                type="time" 
                                value={this.state.time}
                                onChange={(e) => this.handleChange(e)}
                            />
                        <Form.Label htmlFor="location">Location:</Form.Label>
                            <Form.Control 
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
            </Container>
        )
    }
}

export default InsertEntry;