'use strict';

var heading = require('./schema/heading');

module.exports = {
  'get': {
    '/headings': {
      '_apiInfo': {
        'l': 'Search Headings',
        'group': 'Basic',
        'groupMain': true
      }
    }
  },
  'post': {
    '/headings': {
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
};
