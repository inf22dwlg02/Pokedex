'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'pokemon-mysql',
    user: 'root',
    password: '12345678',
    database: 'pokemon'
});

connection.connect (function (err) {
    if(err){
        console.log('Error on database connection.');
        throw err;
    }
console.log('Database connection active.');
});

module.exports = connection