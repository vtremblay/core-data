'use strict';

var udac = require('./schema/udac');

module.exports = {
  type: 'service',
  prerequisites: {
    cpu: '',
    memory: ''
  },
  serviceName: 'udac',
  serviceGroup: 'UDACs services',
  serviceVersion: 1,
  servicePort: 4030,
  extKeyRequired: false,
  'errors': {},
  'schema': {
    'get': {
      '/': {
        '_apiInfo': {
          'l': 'Search UDACs',
          'group': 'Basic',
          'groupMain': true
        },
        'type': {
          'source': [ 'query.type' ],
          'validation': {
            'type': 'array',
            'items': {
              'type': 'string'
            },
            'minItems': 0
          }
        }
      }
    },
    'post': {
      '/': {
        '_apiInfo': {
          'l': 'Add UDAC',
          'group': 'Basic',
          'groupMain': true
        },
        'data': {
          'required': true,
          'source': [ 'body.data' ],
          'validation': {
            'type': 'object',
            'properties': udac
          }
        }
      }
    }
  }
};
