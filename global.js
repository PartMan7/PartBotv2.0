global.toID = function (text) {
	if (typeof text === 'string') return text.toLowerCase().replace(/[^a-z0-9]/g, '');
};


/**************************
*        Modules          *
**************************/

// TODO: Add origindb here, ensure these are used wherever possible
global.axios = require('axios');
global.config = require('./config.js');
global.fs = require('fs-extra');
global.https = require('https');
global.levenshtein = require('js-levenshtein');
global.nunjucks = require('nunjucks');
nunjucks.configure('pages/views', { autoescape: true });
global.tools = require('./data/tools.js');
global.url = require('url');
global.util = require('util');

global.BattleAI = require('./data/BATTLE/ai.js').AI;
global.COLORS = require('./data/DATA/colors.json');
global.DATABASE = require('./handlers/database.js');
global.GAMES = require('./data/GAMES/index.js');


/**************************
*        Storage          *
**************************/

global.queryRoom = '';
global.cooldownObject = {};
global.prefix = config.prefix;
global.websiteLink = config.websiteLink;


/**************************
*     Abbreviations       *
**************************/

global.unxa = 'Unexpected number of arguments.';
global.tcroom = 'groupchat-partbot-1v1tc';
global.tctest = 'groupchat-partbot-1v1tc';
// eslint-disable-next-line max-len
global.typelist = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];



/**************************
*          Data           *
**************************/

global.data = {
	pokedex: require('./data/DATA/pokedex.json'),
	items: require('./data/DATA/items.json'),
	moves: require('./data/DATA/moves.json'),
	abilities: false,
	typechart: require('./data/DATA/typechart.js').BattleTypeChart,
	go: require('./data/DATA/go.json'),
	unitedex: require('./data/UNITE/pokemon.json'),
	unitestats: require('./data/UNITE/stats.json'),
	uniteitems: {
		battle: require('./data/UNITE/battle_items.json'),
		held: require('./data/UNITE/held_items.json')
	}
};

global.data.abilities = [...new Set(Object.values(data.pokedex).filter(mon => mon.num > 0).map(mon => {
	return Object.values(mon.abilities);
}).reduce((acc, abs) => acc.concat(abs), []))].sort();
// TODO: Add actual ability data
