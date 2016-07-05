'use strict';

var headingService = require('./heading.service');

module.exports = {
  init: function (service) {
    service.get('/headings', headingService.get);
    service.post('/headings', headingService.post);
  }
};
