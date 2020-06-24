import React from 'react';
import hardcodeddata from '../data.json';
import TeamsList from '../components/TeamsList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class Teams extends React.Component {
	
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
			// throw new Error('500: Server Error');
			const data = {
				teams: hardcodeddata.teams
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
				<h1>Equipos</h1>

				<TeamsList teams={this.state.data.teams} />
			</div>
		);
	}
}

export default Teams;
