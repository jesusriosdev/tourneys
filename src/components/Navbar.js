import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import logo from '../images/logo-feg_94x59.png';

class Navbar extends React.Component {
	render() {
		return (
			<nav>
				<Link className="nav__logo" to="/">
					<img src={logo} alt="logo" />
					<span className="font-weight-light">Torneos</span>
					<span className="font-weight-bold">FEG</span>
				</Link>

				<input type="checkbox" id="check" />
				<label htmlFor="check" className="checkbtn">
					<i className="fa fa-bars"></i>
				</label>
				
				<ul>
					<li>
						<Link className="active" to="/teams">
							Equipos
						</Link>
					</li>
					<li>
						<Link to="/matches">Partidos</Link>
					</li>
				</ul>

			</nav>
		);
	}
}

export default Navbar;
