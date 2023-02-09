'use strict';

var sql = require('../utils/db.js');


/**
 * Finds berries in bag
 *
 * name String 
 * returns berries
 **/
exports.berriesbag = function(name) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM berries WHERE name_id = (SELECT berry FROM bag WHERE berry = ?);", [name], function (err, res){
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