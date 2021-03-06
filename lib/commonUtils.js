'use strict';

module.exports = {
    err: function(message) {
        console.error('[ERR] ' + JSON.stringify(message));
    },

    info: function(message) {
        console.info('[INFO] ' + JSON.stringify(message));
    },

    log: function(message) {
        console.log('[LOG] ' + JSON.stringify(message));
    },

    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
};