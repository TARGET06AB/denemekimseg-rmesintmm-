const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const kmt = new Discord.MessageEmbed()
    .setAuthor(`Komut Sayısı:`)
    .setColor('GREEN')
    .setDescription(`Sistemimde ${client.commands.size} komut bulunmakta`)
    .setFooter('')
    message.channel.send(kmt)
}
 
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: 'komut-sayısı',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar',
  cooldown: 5
};