import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import logo from '../images/logo-feg_94x59.png';

class Navbar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<div className="container-fluid">
					<Link className="Navbar__brand" to="/">
						<img className="Navbar__brand-logo" src={logo} alt="logo" />
						<span className="font-weight-light">Torneos</span>
						<span className="font-weight-bold">FEG</span>
					</Link>
				</div>
			</div>
		);
	}
}

export default Navbar;
