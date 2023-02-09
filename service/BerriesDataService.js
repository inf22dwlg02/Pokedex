'use strict';

var sql = require('../utils/db.js');


/**
 * Finds berries info by name
 *
 * name String 
 * returns berries
 **/
exports.berriesName = function(name) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM berries WHERE name_id = ?", [name], function (err, res){
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
