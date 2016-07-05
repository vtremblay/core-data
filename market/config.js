'use strict';

var market = require('./schema/market');

module.exports = {
  'get': {
    '/markets': {
      '_apiInfo': {
        'l': 'Search Markets',
        'group': 'Basic',
        'groupMain': true
      }
    }
  },
  'post': {
    '/markets': {
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
};
