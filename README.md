# HTTP API

#### POST /user
Create user

#### PUT /user/:user-name
Update a specific user.

#### POST /auth
Authenticate user. Expects an object with a username and password field.

#### GET /reccomended-channels
Get recommended channels/communities. This may be automated and/or be user specific at some point.

#### GET /network
List of known networks.

#### GET /network/:network-name
List of known channels in a specific network.

#### GET /archive/:network/:channel?[fromDate,toDate]
Get message logs from channel.

#### GET /archive/:network?[fromDate,toDate]
Get message logs from network.

## Usage

Just clone the repository:

```bash
$ git clone https://github.com/irc-moo/server.git
```

run

```bash
$ npm install
```

and start coding.

To run the application run `node app`.

## Directory structure

The structure of the project and explanation follows:
```bash
root
├── app.js                  # Application entry point run with "node app"
├── config
│   ├── default.json        # common config for all environments
│   ├── development.json    # config for development environments
│   ├── production.json     # config for production environments
├── controllers
│   ├── index.js            # file that requires all controllers into a hash
│   └── users.js            # an example controller
├── migrations              # migrations directory generated with "sequelize-cli"
├── models
│   ├── index.js            # generated with "sequelize init". requires all models.
│   └── user.js             # an example model. generated with "sequelize-cli model:create"
├── package.json
├── plugins
│   └── index.js            # register plugins. add your custom plugins in this folder as well.
├── README.md               # YOU ARE HERE
└── routes.js               # define all the routes in this file.
```
