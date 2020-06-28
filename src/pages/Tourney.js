import React from 'react';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import Table from '../components/Table';
import MatchesList from '../components/MatchesList';

class Tourney extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			error: null,
			tourney: undefined,
			tourney_type: undefined,
			stats: undefined,
			matches: undefined
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null });

		try {
			const tourneyId = this.props.match.params.tourneyId ?? 1;

			const data_tourney = await api.tourneys.read(tourneyId);
			const data_tourney_type = await api.tourney_types.read(
				data_tourney.tourney_type_id
			);

			const data_dates = await api.dates.list(data_tourney.id);
			const data_rounds = await api.rounds.list(data_tourney.id);
			const data_matches = await api.matches.list(data_tourney.id);

			const data_teams = await api.teams.list();
			const data_stats = this.createStats(data_teams, data_matches);

			this.setState({
				loading: false,
				tourney: data_tourney,
				tourney_type: data_tourney_type,
				stats: data_stats,
				dates: data_dates,
				rounds: data_rounds,
				matches: data_matches
			});
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	createStats(teams, matches) {
		var stats = [];

		teams.forEach((team) => {
			var team_matches = matches.filter((team_match) => {
				return (
					team_match.match_status_id === 2 &&
					(team_match.local_team_id === team.id ||
						team_match.away_team_id === team.id)
				);
			});

			var wins = 0,
				draws = 0,
				losses = 0,
				goals_favor = 0,
				goals_against = 0,
				goal_difference = 0,
				points = 0;

			team_matches.forEach((team_match) => {
				if (team_match.local_team_id === team.id) {
					goals_favor = goals_favor + team_match.local_team_score;
					goals_against = goals_against + team_match.away_team_score;

					if (team_match.local_team_score > team_match.away_team_score) {
						wins++;
						points = points + 3;
					} else if (
						team_match.local_team_score === team_match.away_team_score
					) {
						draws++;
						points++;
					} else {
						losses++;
					}
				} else {
					goals_favor = goals_favor + team_match.away_team_score;
					goals_against = goals_against + team_match.local_team_score;

					if (team_match.away_team_score > team_match.local_team_score) {
						wins++;
						points = points + 3;
					} else if (
						team_match.away_team_score === team_match.local_team_score
					) {
						draws++;
						points++;
					} else {
						losses++;
					}
				}

				goal_difference = goals_favor - goals_against;
			});

			stats.push({
				position: 0,
				badge: team.badge_file_name,
				team: team.name,
				games_played: team_matches.length,
				wins: wins,
				draws: draws,
				losses: losses,
				goals_favor: goals_favor,
				goals_against: goals_against,
				goal_difference: goal_difference,
				points: points
			});
		});

		return stats.sort(
			(a, b) => b.points - a.points || b.goal_difference - a.goal_difference
		);
	}

	render() {
		if (this.state.loading === true) {
			return <PageLoading />;
		}

		if (this.state.error) {
			return <PageError error={this.state.error} />;
		}

		if (this.state.tourney && this.state.tourney.tourney_type_id === 2) {
			return (
				<div className="container">
					<div className="row">
						<h1>
							{this.state.tourney_type.description} {this.state.tourney.year}
						</h1>

						<Table stats={this.state.stats} />

						<MatchesList
							dates={this.state.dates}
							rounds={this.state.rounds}
							matches={this.state.matches}
						/>
					</div>
				</div>
			);
		} else {
			return <PageError error={this.state.error} />;
		}
	}
}

export default Tourney;
