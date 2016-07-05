'use strict';

var marketService = require('./market.service');

module.exports = {
  init: function (service) {
    service.get('/markets', marketService.get);
    service.post('/markets', marketService.post);
  }
};
