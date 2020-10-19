import React from 'react';
import Container from 'react-bootstrap/Container';

class About extends React.Component {
    render() {
        return (
            <Container fluid className="container2">
                <h2>About Heads-Up</h2>
                <p>The purpose of this app is to act as a simple service and support tool for the victims of sexual assault and members of communities where attacks are known to have taken place anywhere in the world.</p>
                <p>The objective is that everybody can use it and it can help as a way so that victims can help other community members as a way to prevent more sexual attacks and to make it easier to catch sexual offenders.</p>
                <p>We decided to make the project worldwide because there is nothing like this yet and because this could help especially migrants and refugees who are usually some of the most vulnerable members of society.</p>
                <p>We chose the title "Heads-Up" because it makes sense in two ways:</p>
                <ul>
                    <li>Firstly because a "heads-up" is a warning, or a message that alerts or prepares</li>
                    <li>Also because sexual assault victims tend to feel shame and this is a way to empower them so that they can hold their heads up high.</li>
                </ul>

                <h3>Features</h3>
                <ul>
                    <li>Interactive city map with markers showing attacks by location</li>
                    <li>Users can contribute details of attack via submit form, which will take the date, time, location and description of attacker to store in database</li>
                    <li>Users should be able to filter/search map to define location and date/time range</li>
                    <li>Live data incorporated from police/news data sources (tbc)</li>
                    <li>Support page with resources and contact information</li>
                    <li>Alert tool allows users to register for text/email alerts of new attacks added close to user's location (tbc)</li>
                    <li>Member's support forum</li>
                </ul>
                <p><em>This is a student project that was created at <a href="http://codeop.tech">CodeOp</a>, a full stack development bootcamp in Barcelona.</em></p>
                <br/>
            </Container>
        )
    }
}

export default About;