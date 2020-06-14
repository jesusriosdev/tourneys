import React from 'react';

class MatchesList extends React.Component {
	render() {
		if (this.props.matches.length === 0) {
			return (
				<div>
					<h3>No se encontraron partidos.</h3>
				</div>
			);
		}
		return (
			<React.Fragment>
				<ul className="row">
					{this.props.matches.map((match) => (
						<li className="col-12" key={match.id}>
							<div>
								<div>
									<span>{match.local_team_id}:</span>
									<span>{match.local_team_score}</span>
								</div>
								<div>
									<span>vs</span>
								</div>
								<div>
									<span>{match.away_team_score}:</span>
									<span>{match.away_team_id}</span>
								</div>
							</div>
						</li>
					))}
				</ul>
			</React.Fragment>
		);
	}
}

export default MatchesList;
