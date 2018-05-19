import React from 'react';

const ContactInfo = ({logo, value}) => (
	<h3>
		<img src={logo} alt="{type} icon" className="Contact-icon" /> {value}
	</h3>
);

export default ContactInfo;