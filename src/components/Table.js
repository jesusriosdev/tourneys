import React from 'react';
import './styles/Table.css';

class MatchesList extends React.Component {
	render() {
		var position = 1;
		return (
			<React.Fragment>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<td>#</td>
							<td></td>
							<td className="text-left">Equipo</td>
							<td>PJ</td>
							<td>G</td>
							<td>E</td>
							<td>P</td>
							<td>GF</td>
							<td>GC</td>
							<td>DG</td>
							<td>Pnts</td>
						</tr>
					</thead>
					<tbody>
						{this.props.stats.map((stat) => (
							<tr key={position}>
								<td>{position++}</td>
								<td>
									<img
										height="25"
										src={require(`../images/badges/${stat.badge}`)}
										alt="badge"
									/>
								</td>
								<td className="text-left">{stat.team}</td>
								<td>{stat.games_played}</td>
								<td>{stat.wins}</td>
								<td>{stat.draws}</td>
								<td>{stat.losses}</td>
								<td>{stat.goals_favor}</td>
								<td>{stat.goals_against}</td>
								<td>{stat.goal_difference}</td>
								<td>{stat.points}</td>
							</tr>
						))}
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}

export default MatchesList;
