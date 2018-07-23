const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
	.then(() => {
		const server = express();

		const api = require('./routes/api');
		server.use('/api', api);

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		server.listen(port, err => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${port}`);
		});
	})
	.catch(err => {
		console.log(err);
		process.exit(1);
	});
