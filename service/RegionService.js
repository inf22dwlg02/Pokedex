'use strict';

var sql = require('../utils/db.js');

/**
 * Says cardinal point
 *
 * cardinal_point String 
 * returns Region
 **/
exports.cardinalpoint = function(name) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT cardinal_point FROM regions WHERE name = ?", [name], function (err, res){
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