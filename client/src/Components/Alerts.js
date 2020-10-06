import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Alerts extends React.Component {
    render() {
        return (
            <div>
                <h2>Register for Alerts</h2>
                <Form>
                    <Form.Group>
                        <Form.Label for="email">Insert Your Email-Address</Form.Label>
                            <Form.Control type="email" />
                        <Form.Label for="address">Insert Address Or Pin Location On the Map</Form.Label>
                            <Form.Control type="text" />
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.6329504891823!2d13.411117315697119!3d52.5219813798145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1edb11286f%3A0x30fc01c366e4166e!2sAlexanderplatz!5e0!3m2!1spt-PT!2sde!4v1601994500532!5m2!1spt-PT!2sde" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        <br />
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>

            </div>
        )
    }
}

export default Alerts;