import React from 'react';
import Container from 'react-bootstrap/Container';

class Support extends React.Component {
    render() {
        return (
            <Container fluid className="container2">
                <h2>Support</h2>
                <h3>If you need immediate help, call the police or the national emergency number!</h3>
                <h4>Please note that in some countries the police or national emergency numbers don't speak English!</h4>
                <h3>Global Links:</h3>
                <ul>
                    <li><a href="https://en.wikipedia.org/wiki/List_of_emergency_telephone_numbers">List of Emergency Telephone Numbers</a></li>
                    <li><a href="https://internationaltherapistdirectory.com/">International Therapist Directory</a></li>
                    <li><a href="https://www.embassy-worldwide.com/?__cf_chl_jschl_tk__=e706eb795d2d7e3904a70dafe109bce9e2a6e86e-1601992006-0-ATbr4kwghSr9J4FjhGrT__0s2-Q7X9GYwkahl20cnPkRLarPSTtVNhlT3HIJL0HOMwFAFc2sqvONwt_0i4iVSN86gZJAtB2lAUqbcA5NGatvFl4OAb2oI_mY1en7KeOTbGRMCuzS9vEXJwXQVaRmQwKB4RJ3_pFXFAv7wZnK5PdL2ZiHZYnOMCadm8kTDGJQhFRUig4XUvgLePV_2wM52-DlkbyG2BMuW0UImEGNDt4z0neOkVRkciVWOFhZQsIoBaonc514AupOvHCoT5u1pU0">Embassy Worldwide</a></li>
                    <li><a href="https://www.rcne.com/links/sources-of-help-for-survivors/">Sources of Help for Survivors</a></li>

                </ul>
                <h3>UK links:</h3>
                <ul>
                    <li><a href="https://www.victimsupport.org.uk/">Victim Support</a></li>
                    <li><a href="https://rapecrisis.org.uk/">Rape Crisis England & Wales</a></li>
                    <li><a href="http://www.galop.org.uk/">Galop</a></li> 
                    <li><a href="https://www.survivorsuk.org/">Survivors UK</a></li>
                    <li><a href="https://crimestoppers-uk.org/">Crime Stoppers</a></li>
                    <li><a href="https://www.refuge.org.uk/">Refuge</a></li>
                    <li><a href="https://www.womensaid.org.uk/">Women's Aid</a></li>             
                </ul>
            <br/>
            </Container>
        )
    }
}

export default Support;