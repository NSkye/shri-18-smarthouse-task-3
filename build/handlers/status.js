"use strict";
var dateDiff = require('../libs/date-diff');
module.exports = function (startTime) {
    return function (_, res) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send(dateDiff(startTime));
    };
};
