'use strict';

var mid = require('./mid');

module.exports = (seed) => {
    var random = require('./random')(seed);
    return (p, corners) => {
        var corner = corners[random(corners.length)];
        return mid(p, corner);
    };
};