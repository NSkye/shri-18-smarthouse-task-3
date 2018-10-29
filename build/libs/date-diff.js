"use strict";
module.exports = function dateDiff(startDate) {
    var diff = (Date.now() - startDate);
    return [3600000, 60000, 1000].reduce(function (ac, cv, ci) {
        var delta = Math.floor(diff / cv);
        diff = diff - delta * cv;
        delta = String(delta);
        ac += (delta.length >= 2 ? delta : '0' + delta) + (ci === 2 ? '' : ':');
        return ac;
    }, '');
};
