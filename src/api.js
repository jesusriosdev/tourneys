// const BASE_URL = 'http://localhost:3001/api';
const BASE_URL = 'https://torneosfeg.com/api';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
	Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 100) =>
	delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
	// await simulateNetworkLatency();

	options.headers = {
		'Content-Type': 'application/json',
		Accept: 'application/json'
	};

	const url = BASE_URL + endpoint;
	const response = await fetch(url, options);
	const data = await response.json();

	return data;
}

const api = {
	badges: {
		list() {
			return callApi('/badges');
		},
		create(badge) {
			return callApi(`/badges`, {
				method: 'POST',
				body: JSON.stringify(badge)
			});
		},
		read(badgeId) {
			return callApi(`/badges/${badgeId}`);
		},
		update(badgeId, updates) {
			return callApi(`/badges/${badgeId}`, {
				method: 'PUT',
				body: JSON.stringify(updates)
			});
		},
		// Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
		remove(badgeId) {
			return callApi(`/badges/${badgeId}`, {
				method: 'DELETE'
			});
		}
	},
	
	teams: {
		list() {
			return callApi('/teams');
		}
	},

	championships: {
		list() {
			return callApi('/championships');
		}
	},

	tourney_types: {
		list() {
			return callApi('/tourney_types');
		},
		read(tourney_type_id) {
			return callApi(`/tourney_types/${tourney_type_id}`);
		}
	},

	tourneys: {
		list() {
			return callApi('/tourneys');
		},
		read(tourney_id) {
			return callApi(`/tourneys/${tourney_id}`);
		},
		currentlyActive(tourney_type_id) {
			return callApi(`/tourneys_active/${tourney_type_id}`);
		}
	},

	dates: {
		async list(tourney_id) {
			var result = await callApi('/dates');
			var result_filtered = result.filter((item) => {
				return item.tourney_id === tourney_id;
			});
			return result_filtered;
		},
		read(date_id) {
			return callApi(`/dates/${date_id}`);
		}
	},

	rounds: {
		async list(tourney_id) {
			var result = await callApi('/rounds');
			var result_filtered = result.filter((item) => {
				return item.tourney_id === tourney_id;
			});
			return result_filtered;
		},
		read(round_id) {
			return callApi(`/rounds/${round_id}`);
		}
	},

	knockouts: {
		async list(tourney_type_id) {
			var result = await callApi(`/knockouts/${tourney_type_id}`);
			return result;
		},
		read(knockout_id) {
			return callApi(`/knockouts/${knockout_id}`);
		}
	},

	matches: {
		async list(tourney_id) {
			var result = await callApi('/matches');
			var result_filtered = result.filter((item) => {
				return item.tourney_id === tourney_id;
			});
			return result_filtered;
		},
		read(match_id) {
			return callApi(`/matches/${match_id}`);
		}
	},

	groups: {
		async list(tourney_id) {
			var result = await callApi(`/groups/${tourney_id}`);
			return result;
		}
	},

	group_teams: {
		async list(tourney_id) {
			var result = await callApi(`/group_teams/${tourney_id}`);
			return result;
		}
	}

};

export default api;
