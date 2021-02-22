const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllTransactions = function(callback) {
  // TODO - your code here!
  connection.query('SELECT * FROM transactions;', function (err, data) {
    if(err) {
      console.err(err)
      callback(err, null);
      return
    }
    callback(null, data)
  })
};

module.exports = {
  getAllTransactions
};
