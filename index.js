'use strict';

var corners;

function init({width, height}) {
    corners = [
        [width * 1 / 3, 10],
        [10, height - 10],
        [width - 10, height * 2 / 3]
    ];
}

var times = require('lodash.times');
var setPixel = require('./lib/set-pixel');
var next = require('./lib/next')('seed');
function draw({ctx}) {
    var p = [100, 100];
    times(10000, () => {
        p = next(p, corners);
        setPixel(ctx, p);
    });
}

require('./lib/canvas')(init, draw);
