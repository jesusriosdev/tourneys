var http = require('http');
// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');

http
	.createServer(function (req, res) {
		console.log('listening on port %s...', process.env.PORT);
		res.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		res.end('Hello, world!');
	})
	.listen(process.env.PORT);
