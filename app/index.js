require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const routes = require('./routes');

// depricated = bad sorry running out of time
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || port);

app.use(bodyParser());
app.use(routes);

const server = app.listen(port, () => {
    console.log(`Server again started on port ${port}`);
    console.log(`View web application @http://localhost:${port}`);
});

module.exports = server;