import React from 'react';
import './styles/MatchesList.css';

class MatchesList extends React.Component {
	
	componentDidMount() {}

	GetTeam = (team_id) => {
		var result_filtered = this.props.teams.filter((item) => {
			return item.id === team_id;
		})[0];

		return result_filtered;
	};

	RenderWinnerArrow = (score_one, score_two) => {
		if (score_one > score_two) {
			return (
				<svg
					className="imspo_mt__triangle"
					aria-label="Winner"
					height="8"
					role="img"
					width="6"
				>
					<polygon points="6,0 6,8 0,4"></polygon>
				</svg>
			);
		} else return '';
	};

	RenderMatches = (round_id, knockout_id) => {
		var round_matches = this.props.matches.filter((match) => {
			return (round_id && match.round_id === round_id) || (knockout_id && match.knockout_id === knockout_id);
		});

		return (
			<React.Fragment>
				{round_matches.map((match) => {
					var local_team = this.GetTeam(match.local_team_id);
					var away_team = this.GetTeam(match.away_team_id);

					return (
						<div className="col-12 col-md-6 match-card" key={match.id}>
							<div className="col-10 match-card__teams">
								<div className="match-card__teams__team">
									<div className="col-2 match-card__teams__team__badge">
										<img
											height="30"
											src={require(`../images/badges/${local_team.badge_file_name}`)}
											alt="badge"
										/>
									</div>
									<div
										className={`col-10 match-card__teams__team__name ${
											match.match_status_id === 1
												? ''
												: match.local_team_score > match.away_team_score
												? 'font-weight-bolder'
												: 'font-weight-lighter'
										}`}
									>
										{local_team.name}
									</div>
								</div>
								<div className="match-card__teams__team">
									<div className="col-2 match-card__teams__team__badge">
										<img
											height="30"
											src={require(`../images/badges/${away_team.badge_file_name}`)}
											alt="badge"
										/>
									</div>
									<div
										className={`col-10 match-card__teams__team__name ${
											match.match_status_id === 1
												? ''
												: match.away_team_score > match.local_team_score
												? 'font-weight-bolder'
												: 'font-weight-lighter'
										}`}
									>
										{away_team.name}
									</div>
								</div>
							</div>
							<div className="col-2 match-card__scores">
								<div
									className={`match-card__teams__team ${
										match.match_status_id === 1
											? ''
											: match.local_team_score > match.away_team_score
											? 'font-weight-bolder'
											: 'font-weight-lighter'
									}`}
								>
									{match.match_status_id === 2 ? match.local_team_score : '-'}
								</div>
								<div
									className={`match-card__teams__team ${
										match.match_status_id === 1
											? ''
											: match.away_team_score > match.local_team_score
											? 'font-weight-bolder'
											: 'font-weight-lighter'
									}`}
								>
									{match.match_status_id === 2 ? match.away_team_score : '-'}
									{this.RenderWinnerArrow(
										match.away_team_score,
										match.local_team_score
									)}
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
								{this.RenderMatches(round.id, null)}
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
									Fecha {date.date_number}{' '}
									<span className="font-weight-light">
										({date.description})
									</span>
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

	RenderKnockouts = () => {
		return (
			<React.Fragment>
				{this.props.knockouts.map((knockout) => {
					return (
						<div className="date-card" key={knockout.id}>
							<div className="date-card__header">
								<div className="date-card__header__date">
									{knockout.description}
								</div>
							</div>
							<div className="date-card__content">
								{this.RenderMatches(null, knockout.id)}
							</div>
						</div>
					);
				})}
			</React.Fragment>
		);
	};

	RenderMatchesList = () => {
		switch (this.props.tourney_type_id) {
			case 1:
				// TORNEO.
				return '';

			case 2:
				// LIGA.
				return <div className="tourney-matches">{this.RenderDates()}</div>;

			case 3:
				// COPA
				return <div className="tourney-matches">{this.RenderKnockouts()}</div>;

			case 4:
				// CHAMPIONS
				return '';

			default:
				return '';
		}
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
				{this.RenderMatchesList()}
			</React.Fragment>
		);
	}
}

export default MatchesList;
