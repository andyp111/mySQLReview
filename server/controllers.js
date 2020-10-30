const dbHelpers = require('../database/dbHelpers');

module.exports = {
  get: (req, res) => {
    dbHelpers.get((error, result) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send(result);
      }
    })
  },

  post: (req, res) => {
    dbHelpers.post(req, (error, result) => {
      if (error) {
        res.status(400).send(error);
      } else {
        res.status(200).send(result);
      }
    })
  }
}