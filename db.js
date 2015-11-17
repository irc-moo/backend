const bluebird = require('bluebird');
const pg = require('pg-promise')({
  promiseLib: bluebird
});

const constants = require('./constants');
const conString = process.env.DB;

function createUserTable() {
  const createUsersTableQuery =
  `CREATE TABLE IF NOT EXISTS users (
    id UUID,
    username varchar(${constants.MAX_USERNAME_LENGTH}),
    passwordHash varchar(${constants.PASSWORD_HASH_LENGTH}),
    email varchar(${constants.MAX_EMAIL_LENGTH}),
    created int,
    lastLoginAttempt int,
    lastLogin int,
    permissions int,
    PRIMARY KEY(id, username)
  )`;
  pg(conString)
    .query(createUsersTableQuery)
    .catch((err) => {
      throw err;
    })
}

createUserTable();

module.exports = {
  createUser(username, password, email) {
    return pg(conString)
      .query(`INSERT INTO users (username, password, email) VALUES (${username}, ${password}, ${email})`);
  },
  createLimitedUser(username) {
    return pg(conString)
      .query(`INSERT INTO users (username) VALUES (${username})`);
  },
  deleteUser(username) {
    return pg(conString)
      .query('')
  },
  getUser() {
    return pg(conString)
      .query('SELECT')
  },
  updateUser(username, password, email) {
    return pg(conString)
      .query('')
  }
}
