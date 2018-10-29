'use strict';

const express = require('express');

const createStatusHandler = require('./handlers/status');
const eventsHandler = require('./handlers/events');
const handle404 = require('./middleware/not-found');
const handleError = require('./middleware/error');

const app = express();
const port = 8000;

app.get('/status', createStatusHandler(Date.now()));
app.get('/api/events', eventsHandler);

app.use(handle404);
app.use(handleError);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
