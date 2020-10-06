import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class InsertEntry extends React.Component {
    render() {
        return (
            <Container>
                <h2>Add New Entry</h2>
                <Form>
                    <Form.Group>
                        <Form.Label for="date">Aproximate Date:</Form.Label>
                            <Form.Control type="date" />
                        <Form.Label for="time">Aproximate Time:</Form.Label>
                            <Form.Control type="time" />
                        <Form.Label for="location">Location:</Form.Label>
                            <Form.Control type="text" />
                        <Form.Label for="description">Description of subject:</Form.Label>
                            <Form.Control as="textarea" rows="4" />
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

export default InsertEntry;