import React from 'react';

import './styles/PageError.css';

function PageError(props) {
	return (
		<div className="PageError">
			<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">
				❌
			</span>
			{props.error.message}
			<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">
				😱
			</span>
		</div>
	);
}

export default PageError;
