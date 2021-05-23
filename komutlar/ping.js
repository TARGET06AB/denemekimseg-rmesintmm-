const Discord = require('discord.js');

exports.run = (client, message) => {
  
  var ping = new Discord.MessageEmbed()

  .setColor('#313131')
  .setDescription(`Botun Ping Değeri ・ ${client.ws.ping}ms`)
  message.channel.send(ping)
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'ping',
  usage: 'ping',
  cooldown: '2'
};