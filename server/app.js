// load up the express framework and body-parser helper
const express = require("express");
const bodyParser = require("body-parser");

// create an instance of express to serve our end points
const app = express();
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	res.header(
		"Access-Control-Allow-Headers",
		"X-Requested-With, Content-type,Accept,X-Access-Token,X-Key"
	);
	// res.header('Access-Control-Allow-Origin', 'https://torneosfeg.com');
	// res.header('Access-Control-Allow-Origin', 'http://torneosfeg.com');

	res.header("Access-Control-Allow-Origin", "*");
	next();
});

// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require("fs");

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this is where we'll handle our various routes from
const routes = require("./routes/routes.js")(app, fs);

// finally, launch our server on port 3001.
const port = process.env.port || 3001;
const server = app.listen(port, () => {
	console.log("listening on port %s...", server.address().port);
});
