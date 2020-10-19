import React from 'react';
import emailjs from 'emailjs';

class Emailjs extends React.Component{

    sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_2nxqn7h', 'template_1abvtkq', e.target, 'user_qwRxC6MyQfWVRgEQp98Nm')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    render(){
        return (
            <div>
                <form className="contact-form" onSubmit={(e) => this.sendEmail(e)}>
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>


        );
    }
}

export default Emailjs;