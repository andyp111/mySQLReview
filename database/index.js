const mysql = require('mysql');
// https://www.npmjs.com/package/mysql

// TODO: establish connection
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'foodDB'
})


db.connect();

db.query('SELECT 1 + 1 as solution', function(err, results, fields) {
  console.log('the solution is', results[0].solution);
});
module.exports = db;