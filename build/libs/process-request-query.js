"use strict";
var allowedTypes = ['info', 'critical'];
module.exports = function processRequestQuery(query, wrappedEvents) {
    var events = wrappedEvents.events;
    var types = query.split(':').filter(function (type) { return type !== ''; });
    for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
        var type = types_1[_i];
        if (!~allowedTypes.indexOf(type)) {
            return null;
        }
    }
    return events.filter(function (event) { return ~types.indexOf(event.type); });
};
