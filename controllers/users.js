var db = require('../db');

module.exports = {
	post(request, reply) {
		const username = request.payload.username;
		const password = request.payload.password;

		console.log(username, password);
	},
	get(request, reply) {
    reply('test');
	},
	put(request, reply) {
	  reply('test');
	}
};
