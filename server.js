const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/ericzs'));

app.get('/triango', (req, res) => res.sendFile('index.html', { root: path.join(__dirname, '/dist/ericzs/assets/triango') }));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/dist/ericzs/index.html')));

app.listen(port, () => console.log(`listening on port ${port}`));
