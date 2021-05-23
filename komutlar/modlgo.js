const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) {
   const embed = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle('**HATA**')
   .setDescription('**Bu Komutu Kullanabilmek İçin Yetkili Olman Gerekli!**')
   message.channel.send(embed)
  }
 
 let modlogs = db.get(`modlogkanaly_${message.guild.id}`)
  
  if(!modlogs) {
    let kanal = message.mentions.channels.first();
    if(!kanal) {
   const embed = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle("**HATA**")
   .addField('**Mod-Log Kanalını Seçmediniz.**', '**Doğru Kullanım : !modlog ayarla #kanal**')
   message.channel.send(embed)
    };

    db.set(`modlogkanaly_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);
    {
     const embed = new Discord.MessageEmbed()
     .setColor('GREEN')
     .setTitle('**BAŞARILI**')
     .setDescription(`**Mod-log Başarıyla Ayarlandı.**`)
     message.channel.send(embed)
   }
    
    } else {
      if(modlogs) {
        
        const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);
        {
          const embed = new Discord.MessageEmbed()
          .setColor('RED')
          .setTitle('**HATA**')
        .setDescription(`**Bu sunucuda daha önceden modlog kanalı ayarlanmış. Sıfırlamak için:** !modlog-sıfırla\n**Ayarlanan kanal:** \`${modlogkanal.name}\``)
        message.channel.send(embed)
        }
      }
    }

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 0
}

exports.help = {
    name: 'mod-log',
    description: 'Log kanalını belirler.',
    usage: 'modlog <#kanal>'
}
