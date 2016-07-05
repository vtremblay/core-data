'use strict';

var udacService = require('./udac.service');

module.exports = {
  init: function (service) {
    service.get('/udacs', udacService.get);
    service.post('/udacs', udacService.post);
  }
};
