'use strict';

var soajs = require('soajs');
var config = require('./config.js');
var service = new soajs.server.service(config);

var async = require('async');

var headingRoutes = require('./heading/heading.routes');
var marketRoutes = require('./market/market.routes');
var udacRoutes = require('./udac/udac.routes');

service.init(function () {

  async.parallel([
    function (next) {
      headingRoutes.init(service);
      next(null);
    },
    function (next) {
      marketRoutes.init(service);
      next(null);
    },
    function (next) {
      udacRoutes.init(service);
      next(null);
    }
  ], function () {
    service.start();
  });
});
