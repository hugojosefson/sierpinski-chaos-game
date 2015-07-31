'use strict';

module.exports = (init, draw) => {
    var fit = require('canvas-fit');
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');

    var resizeElement = fit(canvas);

    function resize() {
        resizeElement();
        var options = {canvas, ctx, width: canvas.width, height: canvas.height};
        init(options);
        draw(options);
    }

    window.addEventListener('resize', resizeElement, false);
    resize();
};