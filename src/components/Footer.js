import React from 'react';
import './styles/Footer.css';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-12 d-flex justify-content-center"></div>
						<div className="col-12 d-flex justify-content-center">
							<span>
								© Copyright <span id="copyrightYear"></span>
								<a target="_blank" rel='noopener noreferrer' href="https://etxcoding.com">etxcoding</a>
							</span>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
