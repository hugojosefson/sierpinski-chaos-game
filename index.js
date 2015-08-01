'use strict';

var corners;

function init({width, height}) {
    corners = [
        [width * 1 / 3, 10],
        [10, height - 10],
        [width - 10, height * 2 / 3],
        [width - 10, 10]
    ];
}

var times = require('lodash.times');
var setPixel = require('./lib/set-pixel');
var next = require('./lib/next')('seed');
function draw({ctx, width, height, mousePosition}) {
    ctx.clearRect(0, 0, width, height);
    var p = [100, 100];
    times(5000, () => {
        p = next(p, mousePosition && [corners[0], corners[1], mousePosition] || corners);
        setPixel(ctx, p);
    });
}

require('./lib/canvas')(init, draw);
