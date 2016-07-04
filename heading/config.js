'use strict';

var heading = require('./schema/heading');

module.exports = {
  type: 'service',
  prerequisites: {
    cpu: '',
    memory: ''
  },
  serviceName: 'heading',
  serviceGroup: 'Headings services',
  serviceVersion: 1,
  servicePort: 4030,
  extKeyRequired: false,
  'errors': {},
  'schema': {
    'get': {
      '/': {
        '_apiInfo': {
          'l': 'Search Headings',
          'group': 'Basic',
          'groupMain': true
        }
      }
    },
    'post': {
      '/': {
        '_apiInfo': {
          'l': 'Add Heading',
          'group': 'Basic',
          'groupMain': true
        },
        'data': {
          'required': true,
          'source': [ 'body.data' ],
          'validation': {
            'type': 'object',
            'properties': heading
          }
        }
      }
    }
  }
};
