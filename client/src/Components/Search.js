import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import { withRouter } from "react-router";

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={
            location: '',
            date: ''
        };
    }

    handleChange = (event) => {
        const {target: {name, value}} = event;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('searching:', this.state);
        this.props.search(this.state);
        this.setState({location: '', date: ''});
        this.props.history.push('/');
    }

    render() {
        return(
            <Container fluid className="container" style={{paddingLeft: "50px"}}>
                <br/>
                <h3>Search</h3>
                <br/>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Label htmlFor="date">Select Date:</Form.Label>
                    <Form.Control
                        name="date"
                        type="date" 
                        value={this.state.date}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <br/>
                    <Form.Label htmlFor="location">Insert Location:</Form.Label>
                    <Form.Control
                        name="location"
                        type="text" 
                        value={this.state.location}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <br/>
                    <Button type="submit">Search</Button>
                </Form>
                <br/>
                <br/>
            </Container>
        )
    }
}

export default withRouter(Search);
