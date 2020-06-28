import React from 'react';

class MatchesList extends React.Component {
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
		
	}

	RenderMatches = (round_id) => {
		var round_matches = this.props.matches.filter((match) => {
			return match.round_id === round_id;
		});

		return (
			<React.Fragment>
				{round_matches.map((match) => {
					return(
						<div className="col-12 col-sm-6">
							<h5>local_team_id: {match.local_team_id}</h5>
							<h5>away_team_id: {match.away_team_id}</h5>
						</div>
					);
				})}
			</React.Fragment>
		);
	}

	RenderRounds = (date_id) => {
		var date_rounds = this.props.rounds.filter((round) => {
			return round.date_id === date_id;
		});

		return (
			<React.Fragment>
				{date_rounds.map((round) => {
					return (
						<div className="col-12">
							<div className="col-12">
								<h4>JORNADA: {round.round_number}</h4>
							</div>
							{this.RenderMatches(round.id)}
							{/* <RenderMatches round_id={round.id} /> */}
						</div>
					);
				})}
			</React.Fragment>
		);
	}

	RenderDates = () => {
		
		return (
			<React.Fragment>
				{this.props.dates.map((date) => {
					return (
						<div className="col-12" key={date.id}>
							<div className="col-12">
								<h3>FECHA: {date.date_number}</h3>
							</div>

							{this.RenderRounds(date.id)}
							<this.RenderRounds date_id={date.id} />
						</div>
					);
				})}
			</React.Fragment>
		);
	}
	
	render() {
		
		if (this.props.matches.length === 0) {
			return (
				<div>
					<h3>No se encontraron partidos.</h3>
				</div>
			);
		}

		return (
			<>
				{this.RenderDates()}
			</>
		);
	}
}

export default MatchesList;
