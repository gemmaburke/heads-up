import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class InsertEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            date: '',
            time: '',
            location: '',
            description: ''
        }
    }

    handleChange = (event) => {
        const {target: {name, value}} = event;
        this.setState({
            [name]: value
        });
        // console.log(this.state)
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:', this.state);
        this.props.addAttack(this.state);
        this.setState({date: '', time: '', location: '', description: ''});
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