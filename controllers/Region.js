'use strict';

var utils = require('../utils/writer.js');
var Region = require('../service/RegionService');

module.exports.cardinalpoint = function cardinalpoint (req, res, next, name) {
  Region.cardinalpoint(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};