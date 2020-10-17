import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { withRouter } from "react-router";


class Alerts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            location: '',
            phone: '',
            show: false
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