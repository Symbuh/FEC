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

const postCategory = function(data, callback) {
  connection.query(`INSERT INTO categories (categoryName, categoryBudget) VALUES ("${data.categoryName}", "${data.categoryBudget}");`, function (err, data) {
    if (err) {
      callback('Failed to insert data', null);
      return
    }
    connection.query('SELECT * FROM categories', function(err, data) {
      if (err) {
        callback('Failed to insert data', null);
      }
      callback(null, data);
    })
  })
}

const getCategories = function(callback) {
  connection.query('SELECT * FROM categories', function(err, data) {
    if (err) {
      callback('Failed to retrieve data', null);
    }
    callback(null, data);
  })
}

module.exports = {
  getAllTransactions,
  postCategory,
  getCategories
};
