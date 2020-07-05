const catalogRoutes = (app, fs) => {
	const dataPath = './data/catalogs.json';
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

	// TOURNEY_TYPES
	app.get(baseFolder + '/tourney_types', (req, res) => {
		readFile((data) => {
			var result = data['tourney_types'];
			res.send(result);
		}, true);
	});
	app.get(baseFolder + '/tourney_types/:id', (req, res) => {
		readFile((data) => {
			const id = parseInt(req.params['id']);
			var result = data['tourney_types'];
			var result_filtered = result.filter((item) => {
				return item.id === id;
			})[0];
			res.send(result_filtered);
		}, true);
	});

	// TOURNEY_STATUS
	app.get(baseFolder + '/torney_status', (req, res) => {
		readFile((data) => {
			var result = data['torney_status'];
			res.send(result);
		}, true);
	});
	app.get(baseFolder + '/torney_status/:id', (req, res) => {
		readFile((data) => {
			const id = parseInt(req.params['id']);
			var result = data['torney_status'];
			var result_filtered = result.filter((item) => {
				return item.id === id;
			})[0];
			res.send(result_filtered);
		}, true);
	});

	// MATCH_STATUS
	app.get(baseFolder + '/match_status', (req, res) => {
		readFile((data) => {
			var result = data['match_status'];
			res.send(result);
		}, true);
	});
	app.get(baseFolder + '/match_status/:id', (req, res) => {
		readFile((data) => {
			const id = parseInt(req.params['id']);
			var result = data['match_status'];
			var result_filtered = result.filter((item) => {
				return item.id === id;
			})[0];
			res.send(result_filtered);
		}, true);
	});

};

module.exports = catalogRoutes;
