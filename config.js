'use strict';

var headingConfig = require('./heading/config');
var marketConfig = require('./market/config');
var udacConfig = require('./udac/config');

var merge = require('merge');

module.exports = {
  type: 'service',
  prerequisites: {
    cpu: '',
    memory: ''
  },
  serviceName: 'core data',
  serviceGroup: 'core data',
  serviceVersion: 1,
  servicePort: 4100,
  extKeyRequired: false,
  'errors': {},
  'schema': {}
};


