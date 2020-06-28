import React from 'react';

import './styles/TeamsList.css';

class TeamsList extends React.Component {
	render() {
		if (this.props.teams && this.props.teams.length === 0) {
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
							<div className="team-card__badge col-12 col-sm-2">
								<img
									src={require(`../images/badges/${team.badge_file_name}`)}
									alt="badge"
								/>
							</div>
							<div className="team-card__data col-12 col-sm-10">
								<div>
									<label className="team-card__data__team-name">
										{team.name}
									</label>
									<label className="team-card__data__team-owner">
										({team.owner})
									</label>
								</div>
								<div>
									<label className="team-card__data__team-description">
										{team.description}
									</label>
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
