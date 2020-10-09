import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TEST = [
    {date: 1-10-2020, time: "10:00", location: "Central Station", description: "Tall guy, dressed in black, looked 50 yeard old"},
    {date: 7-10-2020, time: "23:00", location: "Hyde Park", description: "they looked blonde and had a lot of strength"}
]

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={
            attacks: TEST,
            location: '',
            date: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            location: event.target.value
        });
        //console.log(this.state.location)
    };

    handleChange2 = (event) => {
        this.setState({
            date: event.target.value
        });
        //console.log(this.state.location)
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target;
        this.setState({
            location: value
        })
        /*for (let a = 0; a < this.state.attacks.length; a++) {
            for (let b = 0; b < this.state.attacks.length[a]; b++) {
                console.log(this.state.attacks[b])
            }
        }*/
        console.log(this.state.location)
    }

    handleSubmit2 = (event) => {
        event.preventDefault();
        const value = event.target;
        this.setState({
            date: value
        })
        console.log(this.state.date)
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col>
                        <h3>Search by Location</h3>
                        <Form onSubmit={(e) => this.handleSubmit(e)}>
                            <Form.Label htmlFor="location">Insert Location:</Form.Label>
                            <Form.Control
                                name="location"
                                type="text" 
                                value={this.state.location}
                                onChange={(e) => this.handleChange(e)}
                            /> 
                            <Button type="submit">Search</Button>
                        </Form>
                    </Col>
                    <Col>
                        <h3>Search by Date</h3>
                        <Form onSubmit={(e) => this.handleSubmit2(e)}>
                            <Form.Label htmlFor="date">Insert Date:</Form.Label>
                            <Form.Control
                                name="date"
                                type="Date" 
                                value={this.state.date}
                                onChange={(e) => this.handleChange2(e)}
                            /> 
                            <Button type="submit">Search</Button>
                            <Button>See all attacks in the last Week</Button>
                        </Form>
            
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Search;
