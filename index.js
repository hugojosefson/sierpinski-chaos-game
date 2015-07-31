'use strict';

var fit = require('canvas-fit');
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

var resize = fit(canvas);
resize();
window.addEventListener('resize', resize, false);