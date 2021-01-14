const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/dist/ericzs')));

app.get('*', (req, res) =>
  res.sendFile('/dist/ericzs/index.html', { root: __dirname })
);

app.listen(port, () => console.log(`listening on port ${port}`));
