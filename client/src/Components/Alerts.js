import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Alerts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h2>Register for Alerts</h2>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label htmlFor="email">Insert Your Email-Address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email" 
                                value={this.state.email}
                                onChange={(e) => this.handleChange(e)}
                            />
                        <Form.Label htmlFor="address">Insert Address</Form.Label>
                            <Form.Control 
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
            </div>
        )
    }
}

export default Alerts;