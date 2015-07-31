'use strict';

module.exports = (ctx, [x, y]) => {
    ctx.fillStyle = 'rgba(0, 0, 200, 1)';
    ctx.fillRect(x, y, 1, 1);
};