import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withRouter } from "react-router";

// const TEST = [
//     {date: 1-10-2020, time: "10:00", location: "Central Station", description: "Tall guy, dressed in black, looked 50 yeard old"},
//     {date: 7-10-2020, time: "23:00", location: "Hyde Park", description: "they looked blonde and had a lot of strength"}
// ];

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={
            // attacks: TEST,
            text: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
        //console.log(this.state.date)
    };

    /*handleSubmit = (event) => {
        event.preventDefault();
        console.log('searching for:', this.state.location);
        this.props.searchLocation(this.state.location);
        this.setState({location: '', date: ''});
        this.props.history.push('/');
    }*/

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('searching for:', this.state.text);
        this.props.search(this.state.text);
        this.setState({text: ''});
        this.props.history.push('/');
    }



    render() {
        return(
            <Container fluid className="container">
                <Row>
                    <Col>
                        <h3>Search</h3>
                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                            <Form.Label htmlFor="location">Insert Date or Location:</Form.Label>
                            <Form.Control
                                name="q"
                                type="text" 
                                value={this.state.text}
                                onChange={(e) => this.handleChange(e)}
                            /> 
                            <br/>
                            <Button type="submit">Search</Button>
                        </Form>
                    </Col>
                    {/*<Col>
                        <h3>Search by Date</h3>
                        <Form onSubmit={(e) => this.handleSubmit2(e)}>
                            <Form.Label htmlFor="date">Insert Date:</Form.Label>
                            <Form.Control
                                name="date"
                                type="Date" 
                                value={this.state.date}
                                onChange={(e) => this.handleChange(e)}
                            /> 
                            <br/>
                            <Button type="submit">Search</Button>&nbsp; &nbsp;
                            <Button>See all attacks in the last Week</Button>
                        </Form>
            
                    </Col>*/}
                </Row>
                <br/>
            </Container>
        )
    }
}

export default withRouter(Search);
