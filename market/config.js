'use strict';

var market = require('./schema/market');

module.exports = {
  type: 'service',
  prerequisites: {
    cpu: '',
    memory: ''
  },
  serviceName: 'market',
  serviceGroup: 'Markets services',
  serviceVersion: 1,
  servicePort: 4101,
  extKeyRequired: false,
  'errors': {},
  'schema': {
    'get': {
      '/': {
        '_apiInfo': {
          'l': 'Search Markets',
          'group': 'Basic',
          'groupMain': true
        }
      }
    },
    'post': {
      '/': {
        '_apiInfo': {
          'l': 'Add Market',
          'group': 'Basic',
          'groupMain': true
        },
        'data': {
          'required': true,
          'source': [ 'body.data' ],
          'validation': {
            'type': 'object',
            'properties': market
          }
        }
      }
    }
  }
};
