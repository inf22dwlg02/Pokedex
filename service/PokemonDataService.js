'use strict';

var sql = require('../utils/db.js');

/**
 * Create Pokemon entry
 *
 * body Pokemon  (optional)
 * returns Pokemon
 **/
exports.createPokemon = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO pokemons (id, name, estado, region_id) values(?,?,?,?)", [body.id, body.name, body.estado, body.region_id], function (err, res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res.id);
        resolve(res.id);
      }
    });
  });
}

/**
 * Delete pokemon entry
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deletePokemonEntry = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM pokemons WHERE id = ?", [id], function (err, res){
      if(err){
        console.log(err);
        console.log(res);
        reject();
      }
      else{
        console.log(res);
        resolve({"deleted":id});
      }
    });
  });
}


/**
 * Finds pokemon info by Id
 *
 * id Long 
 * returns Pokemon
 **/
exports.GetInfoID = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM pokemons WHERE id = ?", [id], function (err, res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}

/**
 * Finds pokemon info
 *
 * id Long 
 * returns Pokemon
 **/
exports.findspokedata = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM pokemons", function (err, res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res);
      }
    });
  });
}


/**
 * Finds pokemon info by name
 *
 * name String 
 * returns Pokemon
 **/
exports.GetInfoName = function(name) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM pokemons WHERE name = ?", [name], function (err, res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res);
      }
    });
  });
}


/**
 * Finds pokemons by Region
 *
 * region String 
 * returns Region
 **/
exports.pokemonRegion = function(region) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM pokemons WHERE region_id =(SELECT name FROM regions WHERE name = ?);", [region], function (err, res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res);
      }
    });
  });
}


/**
 * Update status
 *
 * body Pokemon 
 * status String 
 * no response value expected for this operation
 **/
exports.updateStatus = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("UPDATE pokemons set estado = ? WHERE id = ?", [body.estado, body.id], function (err, res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res);
      }
    });
  });
}