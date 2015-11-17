const pg = require('pg-promise');
const conString = process.env.DB;

module.exports = function() {
  return pg(conString);
}
