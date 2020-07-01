import React from 'react';
import './styles/MatchesList.css';

class MatchesList extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	loading: true,
		// 	error: null,
		// 	tourney: undefined,
		// 	tourney_type: undefined,
		// 	stats: undefined,
		// 	matches: undefined
		// };
	}

	componentDidMount() {}

	GetTeam = (team_id) => {
		var result_filtered = this.props.teams.filter((item) => {
			return item.id === team_id;
		})[0];

		return result_filtered;
	}

	RenderMatches = (round_id) => {
		var round_matches = this.props.matches.filter((match) => {
			return match.round_id === round_id;
		});

		return (
			<React.Fragment>
				{round_matches.map((match) => {
					return (
						<div className="col-12 col-md-6 match-card" key={match.id}>
							<div className="col-10 match-card__teams">
								<div className="match-card__teams__team">
									<div className="col-2 match-card__teams__team__badge">
										<img
											height="25"
											src={require(`../images/badges/${this.GetTeam(match.local_team_id).badge_file_name}`)}
											alt="badge"
										/>
									</div>
									<div className="col-10 match-card__teams__team__name">
										{this.GetTeam(match.local_team_id).name}
									</div>
								</div>
								<div className="match-card__teams__team">
									<div className="col-2 match-card__teams__team__badge">
										<img
											height="25"
											src={require(`../images/badges/${this.GetTeam(match.away_team_id).badge_file_name}`)}
											alt="badge"
										/>
									</div>
									<div className="col-10 match-card__teams__team__name">
										{this.GetTeam(match.away_team_id).name}
									</div>
								</div>
							</div>
							<div className="col-2 match-card__scores">
								<div className="match-card__teams__team">
									{match.local_team_score}
								</div>
								<div className="match-card__teams__team">
									{match.away_team_score}
								</div>
							</div>
						</div>
					);
				})}
			</React.Fragment>
		);
	};

	RenderRounds = (date_id) => {
		var date_rounds = this.props.rounds.filter((round) => {
			return round.date_id === date_id;
		});

		return (
			<React.Fragment>
				{date_rounds.map((round) => {
					return (
						<div className="round-card" key={round.id}>
							<div className="round-card__header">
								Jornada: {round.round_number}
							</div>
							<div className="round-card__content">
								{this.RenderMatches(round.id)}
							</div>
						</div>
					);
				})}
			</React.Fragment>
		);
	};

	RenderDates = () => {
		return (
			<React.Fragment>
				{this.props.dates.map((date) => {
					return (
						<div className="date-card" key={date.id}>
							<div className="date-card__header">
								<div className="date-card__header__date">
									Fecha {date.date_number}
								</div>
							</div>
							<div className="date-card__content">
								{this.RenderRounds(date.id)}
							</div>
						</div>
					);
				})}
			</React.Fragment>
		);
	};

	render() {
		if (this.props.matches.length === 0) {
			return (
				<div className="tourney-matches">
					<h3>No se encontraron partidos.</h3>
				</div>
			);
		}

		return (
			<React.Fragment>
				<div className="tourney-matches">{this.RenderDates()}</div>
			</React.Fragment>
		);
	}
}

export default MatchesList;
