"use strict";
module.exports = function handleError(error, _, res, next) {
    res.render('500', {
        status: error.status || 500,
        error: error,
    });
    next();
};
