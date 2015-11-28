const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'postgres', 'yha', {
  host: '192.168.1.130',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
  
});


const Network = sequelize.define('networks', {
  networkName: {
    type: Sequelize.STRING
  },
  encoding: {
    type: Sequelize.STRING
  }
});

const  NetWorkServer = sequelize.define('networkservers', {
  serverAddress: {
    type: Sequelize.STRING
  }  
});

Network.hasMany(NetWorkServer);

sequelize.sync();
