const db = require('./index');

const dbHelpers = {
  get: (callback) => {
    let q = 'select * from food';
    db.query(q, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    });
  },
  post: (req, callback) => {
    const { name, price, rating } = req.body;
    let q = `insert into Food (name, price, rating) values ("${name}", ${price}, ${rating})`
    db.query(q, (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    })
  }
}

module.exports = dbHelpers;