const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllTransactions = function(callback) {
  // TODO - your code here!
  connection.query('SELECT * FROM transactions;', function (err, data) {
    if(err) {
      console.log(err)
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
      return;
    }
    callback(null, data);
  })
}
const getCategory = function(input, callback) {
  //let inpoot = input;
  console.log(input.selectedCategory);
  connection.query(`SELECT id FROM categories WHERE categoryName="${input.selectedCategory}"`, (err, data) => {
    if(err) {
      callback('Failed to retrieve data for specific category');
      return;
    }
    console.log('data ' + data);
    // console.log('data0: ' + data[0].id);
    // console.log('input.id' + input.id);
    connection.query(`UPDATE transactions SET category_id="${data[0].id}" WHERE id="${input.id}"`, function(err, data) {
      if(err) {
        callback('Failed to add category to transaction!');
        return;
      }
      callback('Success!');
    })
  })
}

module.exports = {
  getAllTransactions,
  postCategory,
  getCategories,
  getCategory
};
