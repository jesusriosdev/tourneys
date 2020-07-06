import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import logo from '../images/logo-feg_94x59.png';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checkboxChecked: false
		};
	}

	onClick = () => {
		this.setState({
			checkboxChecked: !this.state.checkboxChecked
		});
	};

	checkboxHandler = () => {};

	render() {
		return (
			<nav>
				<Link className="nav__logo" to="/">
					<img src={logo} alt="logo" />
					<span className="font-weight-light">Torneos</span>
					<span className="font-weight-bold">FEG</span>
				</Link>

				<input
					type="checkbox"
					id="check"
					checked={this.state.checkboxChecked}
					onChange={this.checkboxHandler}
				/>
				<label className="checkbtn" onClick={this.onClick}>
					<i className="fa fa-bars"></i>
				</label>

				<ul>
					<li>
						<Link className="active" to="/equipos" onClick={this.onClick}>
							Equipos
						</Link>
					</li>
					<li>
						<Link to="/liga" onClick={this.onClick}>
							Liga
						</Link>
					</li>
					<li>
						<Link to="/copa" onClick={this.onClick}>
							Copa
						</Link>
					</li>
					{/* <li>
						<Link to="/champions" onClick={this.onClick}>
							Champions
						</Link>
					</li> */}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
