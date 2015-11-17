const { user } = require('./controllers');
const validation = require('./validation');

const noop = function(req, reply) { reply('noop') }

module.exports = [
  {
    method: 'POST',
    path: '/user',
    handler: noop,
    config: {
      description: 'Create user'
      validate: {
        payload: {
          username: validation.username,
          password: validation.password
        }
      }
    }
  },
  {
    method: 'PUT',
    path: '/user/{username}',
    handler: noop,
    config: {
      description: 'Update a specific user',
      validate: {
        params: {
          username: validation.username
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/auth',
    handler: noop,
    config: {
      description: 'Authenticate user, Expects an object with username and password fields.'
    },
    validate: {
      payload: {
        username: validation.username,
        password: validation.password
      }
    }
  },
  {
    method: 'GET',
    path: '/reccomended-channels',
    handler: noop,
    config: {
      description: 'Get reccomended channels.',
      notes: 'This may be authomated and/or be custom for each users usage trends at some point in the future.'
    }
  },
  {
    method: 'GET',
    path: '/network',
    handler: noop,
    config: {
      description: 'Get a list of all known irc networks.'
    }
  },
  {
    method: 'GET',
    path: '/network/{network}',
    handler: noop,
    config: {
      description: 'Get a list of known channels in a specific network.',
      validate: {
        params: {
          network: validation.network
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/archive/{network}/{channel}',
    handler: noop,
    config: {
      description: 'Get message logs from a specific channel with a specific network.',
      validate: {
        params: {
          network: validation.network,
          channel: validation.channel
        },
        query: {
          fromEpochTime: validation.epochTime,
          toEpochTime: validation.epochTime
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/archive/{network}',
    handler: noop,
    config: {
      description: 'Get message logs from a specific network.',
      validate: {
        params: {
          network: validation.network
        },
        query: {
          fromEpochTime: validation.epochTime,
          toEpochTime: validation.epochTime
        }
      }
    }
  }
];
