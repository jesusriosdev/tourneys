const teamRoutes = (app, fs) => {
	const dataPath = './data/teams.json';
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

	// TEAMS
	// READ
	app.get(baseFolder + '/teams', (req, res) => {
		fs.readFile(dataPath, 'utf8', (err, data) => {
			if (err) {
				throw err;
			}

			res.send(JSON.parse(data)['teams']);
		});
	});

	// CREATE
	app.post(baseFolder + '/users', (req, res) => {
		readFile((data) => {
			const newUserId = Object.keys(data).length + 1;

			// add the new user
			data[newUserId] = JSON.parse(req.body.data);

			writeFile(JSON.stringify(data, null, 2), () => {
				res.status(200).send('new user added');
			});
		}, true);
	});

	// UPDATE
	app.put(baseFolder + '/users/:id', (req, res) => {
		readFile((data) => {
			// add the new user
			const userId = req.params['id'];
			data[userId] = JSON.parse(req.body.data);

			writeFile(JSON.stringify(data, null, 2), () => {
				res.status(200).send(`users id:${userId} updated`);
			});
		}, true);
	});

	// DELETE
	app.delete(baseFolder + '/users/:id', (req, res) => {
		readFile((data) => {
			// add the new user
			const userId = req.params['id'];
			delete data[userId];

			writeFile(JSON.stringify(data, null, 2), () => {
				res.status(200).send(`users id:${userId} removed`);
			});
		}, true);
	});
	// TEAMS

	// CHAMPIONSHIPS
	// READ
	app.get(baseFolder + '/championships', (req, res) => {
		fs.readFile(dataPath, 'utf8', (err, data) => {
			if (err) {
				throw err;
			}

			res.send(JSON.parse(data)['championships']);
		});
	});
};

module.exports = teamRoutes;
