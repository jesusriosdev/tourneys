import React from 'react';
import hardcodeddata from '../data.json';
import MatchesList from '../components/MatchesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

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
			//throw new Error('500: Server Error');
			const data = {
				matches: hardcodeddata.matches
			};
			this.setState({ loading: false, data: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	render() {
		if (this.state.loading === true) {
			return <PageLoading />;
		}

		if (this.state.error) {
			return <PageError error={this.state.error} />;
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
