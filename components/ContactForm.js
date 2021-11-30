import React from 'react';
import PropTypes from 'prop-types';

const ContactForm = props => {
	return (
		<div>
			<form action="https://getform.io/f/c223ec51-cf67-408c-8661-b7ef918f27cb" method="POST">
				<input type="text" name="name"/> <br/>
				<input type="email" name="email"/> <br/>
				<input type="text" name="message"/> <br/>
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

ContactForm.propTypes = {};

export default ContactForm;