const { execute } = require('./izbaci');
const Command = require('/app/commands/baner.js');
const figlet = require('util').promisify(require('figlet'));

module.exports = {
    name: '8ball',

	async execute(msg, ...banner) {
		return msg.channel.send(await figlet(banner), { code: true });
	}

}