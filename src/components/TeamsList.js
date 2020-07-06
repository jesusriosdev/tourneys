import React from 'react';

import './styles/TeamsList.css';

class TeamsList extends React.Component {
	GetChampionships = (team_id, tourney_type) => {
		var championships_filtered = this.props.championships.filter(
			(championship) => {
				return (
					championship.team_id === team_id &&
					championship.tourney_type_id === tourney_type.id
				);
			}
		);

		return (
			<div>
				{tourney_type.description}:{' '}{championships_filtered[0].wins}
			</div>
		);
	};

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
						<div className="row team-card" key={team.id}>
							<div className="col-sm-2 team-card__badge">
								<img
									src={require(`../images/badges/${team.badge_file_name}`)}
									alt="badge"
								/>
							</div>
							<div className="col-sm-10 team-card__data">
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

									{this.props.tourney_types.map((tourney_type) => (
										<div key={tourney_type.id}>
											{this.GetChampionships(team.id, tourney_type)}
										</div>
									))}
									{/* <div>
										{this.props.tourney_types.maps((tourney_type) => (
											<div></div>
											
										))}
									</div> */}
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
