'use strict';

var fit = require('canvas-fit');
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

var resize = fit(canvas);
resize();
window.addEventListener('resize', resize, false);

var ctx = canvas.getContext('2d');

var times = require('lodash.times');
var setPixel = require('./lib/set-pixel');
var next = require('./lib/next')('seed');
var corners = [
    [canvas.width * 1 / 3, 10],
    [10, canvas.height - 10],
    [canvas.width - 10, canvas.height * 2 / 3]
];
var p = [100, 100];
times(10000, () => {
    p = next(p, corners);
    setPixel(ctx, p);
});