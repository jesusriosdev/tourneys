import React from 'react';
import './styles/Footer.css';
import etxcoding_logo from '../images/etxcoding_logo.svg';

class Footer extends React.Component {
	render() {
		const year = new Date().getFullYear();
		return (
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-12 d-flex justify-content-center">
							<img src={etxcoding_logo} />
						</div>
						<div className="col-12 d-flex justify-content-center">
							<span>
								© Copyright {year} 
								<a
									target="_blank"
									rel="noopener noreferrer"
									href="https://etxcoding.com"
								>
									etxcoding
								</a>
							</span>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
