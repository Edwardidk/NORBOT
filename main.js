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

    if (imTest[0] != -1) {
      for (var i = imTest[0] + 3; i < dadMsg.length; i++) {
        dadText += dadMsg[i];
      }
    } else if (imTest[1] != -1) {
      for (var i = imTest[1] + 4; i < dadMsg.length; i++) {
        dadText += dadMsg[i];
      } 
    } else if (imTest[2] != -1) {
      for (var i = imTest[2] + 4; i < dadMsg.length; i++) {
        dadText += dadMsg[i];
      } 
    }

    msg.channel.send("Hi " + dadText + ", I'm NORBOT!")
  }
});

client.login(config.token);