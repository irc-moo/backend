const db = require('../db');

module.exports = {
	create(request, reply) {
		const username = request.payload.username;
		const password = request.payload.password;
		const email = request.payload.email;

		/* Case when user is temporarily reserving name */
		if(username && !password && !email) {
			console.log('case1');
			db.createLimitedUser(username)
				.then((user) => {
					console.log(user);
					reply(user);
				})

		/* Case when use is registring a full account */
		} else if(username && password && email) {
			console.log('case2');
			db.createUser(username, password, email)
				.then(() => {
					reply()
				})

		/* Invalid params */
		} else {
			console.log('case3');
			reply({'error': 'awdadadawd'});
		}
	},
	get(request, reply) {
		console.log('!');
    reply('get');
	},
	update(request, reply) {
		const username = request.params.username;
	  reply('update');
	},
	login() {
		const username = request.payload.username;
		const password = request.payload.password;
		reply('login');
	},
	logout() {
		reply('logout');
	}
};
