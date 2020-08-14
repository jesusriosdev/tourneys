const teamRoutes = (app, fs) => {
	const dataPath = './data/tourneys.json';
	const baseFolder = '/api';

	// refactored helper methods
	const readFile = (
		callback,
		returnJson = false,
		filePath = dataPath,
		encoding = 'utf8'
	) => {
		fs.readFile(filePath, encoding, (err, data) => {
			if (err) {
				throw err;
			}

			callback(returnJson ? JSON.parse(data) : data);
		});
	};

	const writeFile = (
		fileData,
		callback,
		filePath = dataPath,
		encoding = 'utf8'
	) => {
		fs.writeFile(filePath, fileData, encoding, (err) => {
			if (err) {
				throw err;
			}

			callback();
		});
	};

	// TOURNEYS
	app.get(baseFolder + '/tourneys', (req, res) => {
		readFile((data) => {
			var result = data['tourneys'];
			res.send(result);
		}, true);
	});
	app.get(baseFolder + '/tourneys/:id', (req, res) => {
		readFile((data) => {
			const id = parseInt(req.params['id']);
			var result = data['tourneys'];
			var result_filtered = result.filter((item) => {
				return item.id === id;
			})[0];
			res.send(result_filtered);
		}, true);
	});
	app.get(baseFolder + '/tourneys_active/:id', (req, res) => {
		readFile((data) => {
			const id = parseInt(req.params['id']);
			var result = data['tourneys'];
			var result_filtered = result.filter((item) => {
				return item.tourney_type_id === id && item.tourney_status_id === 2;
			});
			res.send(result_filtered ? result_filtered[0] : []);
		}, true);
	});

	// DATES
	app.get(baseFolder + '/dates', (req, res) => {
		readFile((data) => {
			var result = data['dates'];
			res.send(result);
		}, true);
	});

	// ROUNDS
	app.get(baseFolder + '/rounds', (req, res) => {
		readFile((data) => {
			var result = data['rounds'];
			res.send(result);
		}, true);
	});

	// KNOCKOUTS
	app.get(baseFolder + '/knockouts/:id', (req, res) => {
		readFile((data) => {
			const id = parseInt(req.params['id']);
			var result = data['knockouts'];
			var result_filtered = result.filter((item) => {
				return item.tourney_type_id === id;
			});
			res.send(result_filtered);
		}, true);
	});

	// MATCHES
	app.get(baseFolder + '/matches', (req, res) => {
		readFile((data) => {
			var result = data['matches'];
			res.send(result);
		}, true);
	});


	// GROUPS
	app.get(baseFolder + '/groups/:id', (req, res) => {
		readFile((data) => {
			const id = parseInt(req.params['id']);
			var result = data['groups'];
			var result_filtered = result.filter((item) => {
				return item.tourney_id === id;
			});
			res.send(result_filtered);
		}, true);
	});

	// GROUP_TEAMS
	app.get(baseFolder + '/group_teams/:id', (req, res) => {
		readFile((data) => {
			const id = parseInt(req.params['id']);
			var result = data['group_teams'];
			var result_filtered = result.filter((item) => {
				return item.tourney_id === id;
			});
			res.send(result_filtered);
		}, true);
	});

};

module.exports = teamRoutes;
