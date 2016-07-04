'use strict';

var soajs = require('soajs');
var config = require('./config.js');
var service = new soajs.server.service(config);

var database = 'cmr';
var collection = 'HEADING';

service.init(function () {
  service.get('/', function (req, res) {
    var mongo = new soajs.mongo(req.soajs.registry.coreDB[ database ]);

    mongo.find(collection, {}, {}, function (err, data) {
      res.json(req.soajs.buildResponse(null, data));
    });
  });

  service.post('/', function (req, res) {
    var mongo = new soajs.mongo(req.soajs.registry.coreDB[ database ]);

    mongo.insert(collection, req.soajs.inputmaskData.data, function (err, data) {
      res.json(req.soajs.buildResponse(null, data));
    });
  });
  service.start();
});
