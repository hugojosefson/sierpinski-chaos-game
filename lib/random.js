'use strict';

module.exports = (seed) => {
    var rng = require('seedrandom')(seed);
    return (ceiling) => Math.floor(ceiling * rng());
};
