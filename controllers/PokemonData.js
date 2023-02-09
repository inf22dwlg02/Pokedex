'use strict';

var utils = require('../utils/writer.js');
var PokemonData = require('../service/PokemonDataService');

module.exports.createPokemon = function createpokemon (req, res, next, body) {
  PokemonData.createPokemon(body)
    .then(PokemonData.GetInfoID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePokemonEntry = function deletePokemonEntry (req, res, next, id) {
  PokemonData.deletePokemonEntry(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findspokedata = function findspokedata (req, res, next) {
  PokemonData.findspokedata()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.GetInfoID = function getInfoID (req, res, next, id) {
  PokemonData.GetInfoID(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.GetInfoName = function getInfoName (req, res, next, name) {
  PokemonData.GetInfoName(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pokemonRegion = function pokemonRegion (req, res, next, region) {
  PokemonData.pokemonRegion(region)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateStatus = function updateStatus (req, res, next, body, status) {
  PokemonData.updateStatus(body, status)
    .then(PokemonData.GetInfoID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
