'use strict';

module.exports = {
  merge: function () {
    if (arguments.length >= 2) {
      var destination = arguments[ 0 ];
      for (var i = 1; i < arguments.length - 1; i++) {
        var object = arguments[ i ];
        Object.keys(object).forEach(function (key) {
          destination[ key ] = object[ key ];
        });
      }
      return arguments[ 0 ];
    }
  }
};