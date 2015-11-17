const user = require('./controllers/user');
const validation = require('./validation');

const noop = function(req, reply) { reply('noop') }

module.exports = [
  {
    method: 'POST',
    path: '/user',
    handler: user.create,
    config: {
      tags: ['api'],
      description: 'Create user.',
      validate: {
        payload: {
          username: validation.usernameRequired,
          password: validation.password,
          email: validation.email
        }
      }
    }
  },
  {
    method: 'PUT',
    path: '/user/{username}',
    handler: user.update,
    config: {
      tags: ['api'],
      description: 'Update a specific user.',
      validate: {
        params: {
          username: validation.usernameRequired
        },
        payload: {
          username: validation.username,
          password: validation.password,
          email: validation.email
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/user/{username}',
    handler: user.get,
    config: {
      tags: ['api'],
      description: 'Get a specific user.',
      validate: {
        params: {
          username: validation.usernameRequired
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/login',
    handler: user.login,
    config: {
      tags: ['api'],
      description: 'Generate session token.',
      validate: {
        payload: {
          username: validation.usernameRequired,
          password: validation.passwordRequired
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/logout',
    handler: user.logout,
    config: {
      tags: ['api'],
      description: 'Destroy session token.'
    }
  },
  {
    method: 'GET',
    path: '/reccomended-channels',
    handler: noop,
    config: {
      tags: ['api'],
      description: 'Get reccomended channels.',
      notes: 'This may be authomated and/or be custom for each users usage trends at some point in the future.'
    }
  },
  {
    method: 'GET',
    path: '/network',
    handler: noop,
    config: {
      tags: ['api'],
      description: 'Get a list of all known irc networks.'
    }
  },
  {
    method: 'GET',
    path: '/network/{network}',
    handler: noop,
    config: {
      tags: ['api'],
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
      tags: ['api'],
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
      tags: ['api'],
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
