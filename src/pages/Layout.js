import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout(props) {
	return (
		<React.Fragment>
			<div id="page-container">
				<Header />
				<div id="content-wrap">{props.children}</div>
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default Layout;
