'use strict';

var soajs = require('soajs');
var config = require('./config.js');
var service = new soajs.server.service(config);

var headingRoutes = require('./heading/heading.routes');
var marketRoutes = require('./market/market.routes');
var udacRoutes = require('./udac/udac.routes');

service.init(function () {

  headingRoutes.init(service);
  marketRoutes.init(service);
  udacRoutes.init(service);

  service.start();
});
