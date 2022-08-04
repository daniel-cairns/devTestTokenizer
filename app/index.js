require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');


app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser());
app.use(routes);

app.listen(port, () => {
    console.log(`Server again started on port ${port}`);
    console.log(`View web application @http://localhost:${port}`);
});

module.export = app;