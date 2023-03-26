module.exports = {
	cooldown: 100000,
	help: `Fixes the Bot's nickname in memory.`,
	permissions: 'beta',
	commandFunction: function (Bot, room, time, by, args, client) {
		Bot.say(room, `My name is now ${Bot.status.nickName = config.nickName}!`);
		// This is gonna be awkward in the public repo
	}
};
