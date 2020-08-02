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

  // prevent bot loops and responses to self in future
  if (!msg.author.bot) {
    // dad joke
    let imTest = [msg.content.toLowerCase().search("im "), msg.content.toLowerCase().search("i\'m "), msg.content.toLowerCase().search("i’m ")];

    if (new Set(imTest).size != 1) {
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

    // WHAT DID YOU JUST SAY ABOUT ME
    if (msg.content.toLowerCase().search("norbot") != -1) {
      msg.channel.send("What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.");
    }

    // all my homies hate gulag
    if (msg.content.search("dumb gulag") != -1) {
      msg.channel.send({files: ["https://i.imgflip.com/4a5dib.jpg"]});
    }

    // test if on "debate" server - friend server related functions
    if (msg.guild.id == '464980705047216141') {
      // jhonii-chan nightmare
      if (msg.content.toLowerCase().search("john")) {
        msg.channel.send(":jhon:");
      }
    }
  }
});

client.login(config.token);