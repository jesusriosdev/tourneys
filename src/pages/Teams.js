import React from 'react';
import api from '../api';
import TeamsList from '../components/TeamsList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

class Teams extends React.Component {
	state = {
		loading: true,
		error: null,
		teams: undefined,
		championships: undefined,
		tourney_types: undefined
	};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null });

		try {
			const data_teams = await api.teams.list();
			const data_championships = await api.championships.list();
			const data_tourney_types = await api.tourney_types.list();

			this.setState({
				loading: false,
				teams: data_teams,
				championships: data_championships,
				tourney_types: data_tourney_types
			});
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
				<h1>EQUIPOS</h1>

				<TeamsList teams={this.state.teams} championships={this.state.championships} tourney_types={this.state.tourney_types} />
			</div>
		);
	}
}

export default Teams;
