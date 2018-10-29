"use strict";
var processRequestQuery = require('../libs/process-request-query');
var events = require('../data/events.json');
module.exports = function eventsHandler(req, res) {
    var responseObject = events;
    if (req.query.type) {
        responseObject = processRequestQuery(req.query.type, events);
    }
    var contentType = responseObject ? 'application/json' : 'text/plain';
    var status = responseObject ? 200 : 400;
    var msg = responseObject ? JSON.stringify(responseObject) : 'incorrect type';
    res.setHeader('Content-Type', contentType);
    res.status(status).send(msg);
};
