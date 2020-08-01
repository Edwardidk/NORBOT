const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }

  // dad joke
  let imTest = [msg.content.toLowerCase().search("im "), msg.content.toLowerCase().search("i\'m "), msg.content.toLowerCase().search("i’m ")];

  if (new Set(imTest).size != 1 && !msg.author.bot) {
    let dadMsg = msg.content.split('');
    let dadText = '';

    if (imTest[0] < imTest[1]) {
      for (var i = dadText + 3; i < dadMsg.length; i++) {
        dadText += dadMsg[i];
      }
    } else {
      for (var i = dadText + 4; i < dadMsg.length; i++) {
        dadText += dadMsg[i];
      } 
    }

    msg.channel.send("Hi " + dadText + ", I'm NORBOT!")
  }
});

client.login(config.token);