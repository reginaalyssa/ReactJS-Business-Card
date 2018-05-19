import React, {Component} from 'react';
import emailLogo from './../../assets/wwcodemanila.png';


class Navbar extends Component {
	render() {
		return(
			<div className="Navbar">
				<img src={emailLogo} alt="Women Who Code Manila icon" className="Women-Who-Code-icon" />
			</div>
		);
	}
}

export default Navbar;