import React from 'react';
import hardcodeddata from '../data.json';
import MatchesList from '../components/MatchesList';
import PageLoading from '../components/PageLoading';

class Matches extends React.Component {
	state = {
		loading: true,
		error: null,
		data: undefined
	};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = () => {
		this.setState({ loading: true, error: null });

		try {
			// throw new Error('Not Found');
			const data = {
				matches: hardcodeddata.matches
			};
			this.setState({ loading: true, data: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	constructor(props) {
		super(props);

		// this.state = {
		// 	data: []
		// };
		// console.log(this.state);
	}

	render() {
		if (this.state.loading === true) {
			return <PageLoading />;
		}

		if (this.state.error) {
			return `Error: ${this.state.error.message}`;
		}

		return (
			<div>
				<span>Matches</span>

				<MatchesList matches={this.state.data.matches} />
			</div>
		);
	}
}

export default Matches;
