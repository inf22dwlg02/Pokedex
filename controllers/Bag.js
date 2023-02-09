'use strict';

var utils = require('../utils/writer.js');
var Bag = require('../service/BagService');

module.exports.berriesbag = function berriesbag (req, res, next, name) {
  Bag.berriesbag(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};