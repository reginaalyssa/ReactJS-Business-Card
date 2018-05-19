import React, {Component} from 'react';

class Logo extends Component {
	render() {
		return(
			<img src={this.props.logo} className="App-logo" alt="logo" />
		);
	}
}

export default Logo;