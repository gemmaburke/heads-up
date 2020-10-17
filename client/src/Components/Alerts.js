import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


class Alerts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            phone_number: '',
            location: ''
        }
    }

    handleChange = (event) => {
        const {target: {name, value}} = event;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {target: {name, value}} = event;
        this.setState({
            [name]: value
        });
        console.log(this.state);
        alert("Your email, phone number and address have been successfully added to our database")
        
    };

    

    render() {
        return (
            <Container fluid>
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
                        <Form.Label htmlFor="phone_number">Insert Your Phone Number</Form.Label>
                            <Form.Control
                                required
                                name="phone_number"
                                type="phone_number" 
                                value={this.state.phone_number}
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
            </Container>
        )
    }
}

export default Alerts;