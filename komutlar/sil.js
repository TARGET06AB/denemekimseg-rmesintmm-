const Discord = require('discord.js');exports.run = async(client, message, args) => 
{ if (!message.member.hasPermission("MANAGE_MESSAGES"))    
  return message.channel.send(`Bu Komutu Kullanailmek İçin \`MANAGE_MESSAGES\` yetkisine sahip olmalısın!`);      
 var x = args.slice(0).join(' ') 
 if (!x) return message.channel.send("Temizlemek istediğin sayıyı gir!") 
 if (isNaN(x)) return message.channel.send("Sadece sayı olarak gir!") 
 let fetched = await message.channel.messages.fetch({limit: args[0]})  
 message.channel.bulkDelete(fetched)  .catch(error => message.channel.send("`14` günden önceki mesajları silemem!"))  
 message.channel.send(`${args[0]} adet mesaj silindi!`).then(msg => msg.delete({ timeout: 8000, reason: 'mesaj silme' }))
 
 
 
 message.delete();}
exports.conf = {  enabled: true,   guildOnly: false,   aliases: ["sil"],  permLevel: 0}
;exports.help = {  name: 'temizle',cooldown: 5} 