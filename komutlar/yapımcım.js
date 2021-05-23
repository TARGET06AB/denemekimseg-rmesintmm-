const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('GREEN')
.setAuthor(`Neto Bot`)
.setDescription(`
 
Beni yaptığın için teşekkür ederim <@599238450322997249> ❤️❤️❤️
`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yapımcım'], 
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: 'yapımcıyı gösterir',
  usage: 'yapımcım',
  cooldown: 2
};
