'use strict';

var utils = require('../utils/writer.js');
var BerriesData = require('../service/BerriesDataService');

module.exports.berriesName = function berriesName (req, res, next, name) {
  BerriesData.berriesName(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
