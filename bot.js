const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(Mzg4MTQ1MDQ1NzY2Nzk5MzYx.DQov0g.3mMc2mA9nAlf3VHC9w9ChNpfOp4);
