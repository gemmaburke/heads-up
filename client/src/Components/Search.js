import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class Search extends React.Component {
    render() {
        return (
            <Container>
                <h2>Search for attacks</h2>

                <Form>
                    <Form.Label for="location">Insert Location:</Form.Label>
                    <Form.Control type="text" />
                    <Button>Search</Button>
                </Form>
            </Container>
        )
    }
}

export default Search;