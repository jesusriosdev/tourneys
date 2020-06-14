import React from 'react';
import './styles/Header.css';
import Navbar from './Navbar';

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<Navbar></Navbar>
			</div>
		);
	}
}

export default Header;
