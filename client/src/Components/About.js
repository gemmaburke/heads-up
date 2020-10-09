import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About Heads-Up</h2>
                <p>The purpose of this app is to act as a simple service and support tool for both of victims of sexual assault and for members of communities where attacks are known to have taken place.</p>
                <h3>Features</h3>
                <ul>
                    <li>Interactive city map with markers showing attacks by location</li>
                    <li>Users can contribute details of attack via submit form, which will take the date, time, location and description of attacker to store in database</li>
                    <li>Users should be able to filter/search map to define location and date/time range</li>
                    <li>Live data incorporated from police/news data sources (tbc)</li>
                    <li>Support page with resources and contact information</li>
                    <li>Alert tool allows users to register for text/email alerts of new attacks added close to user's location (tbc)</li>
                    <li>Member's support forum (tbc)</li>
                </ul>
                <p><em>This is a student project that was created at <a href="http://codeop.tech">CodeOp</a>, a full stack development bootcamp in Barcelona.</em></p>

            </div>
        )
    }
}

export default About;