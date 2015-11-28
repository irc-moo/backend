const bluebird = require('bluebird');
const pg = require('pg-promise')({
  promiseLib: bluebird
});

const constants = require('./constants');
const ircServers = require('./ircservers')
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


function createNetworkTable() {
  const createNetworkTableQuery =
    `CREATE TABLE IF NOT EXISTS networks (
        id serial primary key,
        networkName varchar(80) unique,
        encoding varchar(30)
  );
  CREATE TABLE IF NOT EXISTS networkServers (
        id serial primary key,
        networkId serial references networks(id),
        serverAddress   varchar(80)
  );`

  return pg(conString)
    .query(createNetworkTableQuery)
    .then(() => {
      console.log('Created networks and networkservers tables [OK]')
    })
    .catch((err) => {
      throw err;
    })
}

function LoadNetworkData() {
  var tempId = 0;
  var promises = ircServers.IRCSERVERS.map((network) => {
    const InsertNetworkQuery = `INSERT INTO networks (networkname, encoding) VALUES ('${network.Name}', '${network.Encoding}') RETURNING id;`;
    return pg(conString)
      .query(InsertNetworkQuery)
      .then((data) => {
        tempId = data;
        network.servers.map((server) => {
          const InsertNetworkServerQuery =
            `INSERT INTO networkservers (networkid, serveraddress) VALUES (${tempId[0].id}, '${server}');`;
          pg(conString)
            .query(InsertNetworkServerQuery)
            .catch((err) => {
              console.log(err);
              throw err;
            })
        })
      })
      .catch((err) => {
        throw err
      })
  })
  return Promise.all(promises);
}

createUserTable();
createNetworkTable().then( () => LoadNetworkData());



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
  },
  
  getNetwork() {
    return pg(conString)
      .query('SELECT * FROM networks')
  }
  
}
