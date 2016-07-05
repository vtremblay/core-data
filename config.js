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
  "schema": {
    "get" : {
      "/": {
        "_apiInfo":{
          "l": "Search UDACs",
          "group": "Basic",
          "groupMain": true
        },
        "type":{
          "source": ['query.type'],
          "validation": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "minItems": 0
          }
        }
      }
    },
    "post" : {
      "/": {
        "_apiInfo":{
          "l": "Add UDAC",
          "group": "Basic",
          "groupMain": true
        },
        "data": {
          "required": true,
          "source": ["body.data"],
          "validation": {
            "type": "object",
            "properties": udac
          }
        }
      }
    }
  }
  // 'schema': merge.recursive(true, headingConfig, marketConfig, udacConfig)
};


