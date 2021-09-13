const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World , This is Roma Kataria!</h1>
	<h2 style="color:green">This is the Green deployment </h2>
    <p>Try sending a request to /error and see what happens</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
