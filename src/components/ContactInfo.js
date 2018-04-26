import React, {Component} from 'react';

class ContactInfo extends Component {
	render() {
		return(
			<h3><img src={this.props.logo} alt="{this.props.type} icon" className="Contact-icon" /> {this.props.value}</h3>
		);
	}
}

export default ContactInfo;