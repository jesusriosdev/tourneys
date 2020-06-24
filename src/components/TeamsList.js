import React from 'react';

import './styles/TeamsList.css';

class TeamsList extends React.Component {
	render() {
		if (this.props.teams.length === 0) {
			return (
				<div>
					<h3>No se encontraron partidos.</h3>
				</div>
			);
		}
		return (
			<React.Fragment>
				<div className="container-fluid">
					{this.props.teams.map((team) => (
						<div className="team-card row" key={team.id}>
							<div className="team-card__badge d-flex justify-content-center col-12 col-sm-2">
								<img
									src={require(`../images/badges/${team.badge_file_name}`)}
									alt="badge"
								/>
							</div>
							<div className="team-card__data d-flex col-12 col-sm-10">
								<label className="team-card__data__team-name">
									{team.name}
								</label>
								<label>({team.owner})</label>

								<div>
									<p>{team.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</React.Fragment>
		);
	}
}

export default TeamsList;
