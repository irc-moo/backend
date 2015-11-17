# irc-moo rest api service

## Usage

index takes in two parameters in the form of env variables. PORT and DB.
```bash
$ node PORT=port DB=dbUrl index.js
```

* To push to dev environment, push to `dev` branch.

* To push to staging environment, push to the `staging` branch.

## Getting started

Just clone the repository:

```bash
$ git clone https://github.com/irc-moo/rest-api-service.git
```

Install deps:

```bash
$ npm install
```

Run:

```bash
$ npm run local-dev
```

## Directory structure

The structure of the project and explanation follows:
```bash
root
├── index.js        # Application entry point
├── controllers
│   ├── index.js    # file that requires all controllers into a hash
│   └── users.js    # an example controller
├── package.json
├── plugins
│   └── index.js    # register plugins. add your custom plugins in this folder as well.
├── README.md       # YOU ARE HERE
└── routes.js       # define all the routes in this file.
```
