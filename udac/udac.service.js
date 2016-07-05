'use strict';

var soajs = require('soajs');

var database = 'cmr';
var collection = 'UDAC';

module.exports = {
  get: function (req, res) {
    var mongo = new soajs.mongo(req.soajs.registry.coreDB[ database ]);

    var query = {};
    if (req.soajs.inputmaskData.type) {
      query = { 'type': { '$in': req.soajs.inputmaskData.type } };
    }

    mongo.find(collection, query, {}, function (err, data) {
      res.json(req.soajs.buildResponse(null, data));
    });
  },

  post: function (req, res) {
    var mongo = new soajs.mongo(req.soajs.registry.coreDB[ database ]);

    mongo.insert(collection, req.soajs.inputmaskData.data, function (err, data) {
      res.json(req.soajs.buildResponse(null, data));
    });
  }
};
