const Discord = require('discord.js')

exports.run = async(client, message, args) => {

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Yardım', client.user.avatarURL())
    .setDescription('\n**Örnek:** `!yardım moderasyon`\n[Neto Botunu Hemen Ekle](https://discord.com/oauth2/authorize?client_id=836322843535998986&scope=bot&permissions=8)')
    .addField('Komutlar:', 
    `!yardım eğlence
    !yardım kullanıcı
    !yardım moderasyon
    !yardım seviye
    !yardım sunucu-kur
    !yardım ek-komut`)
    .setImage('https://media.discordapp.net/attachments/828264675509534750/838356023579246592/standard.gif')
    .setThumbnail(client.user.avatarURL())
    .setColor("BLACK")
    message.channel.send(embed)
}
    if(args[0] === 'kullanıcı') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription('**Kullanıcı Yardım**')
.addField('Komutlar:', 
`!yardım-kullanıcı
**!vakit
!kbilgi
!say
!kripto
!roller
!kurallar
!komut-sayısı
!filmara
!tdk
!avatar`)
.setThumbnail(client.user.avatarURL())
.setColor("BLACK")
message.channel.send(embed)
} 
  if(args[0] === 'seviye') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription('**Seviye Yardım**')
.addField('Komutlar:', 
`!yardım seviye
!rank
GELİŞTİRİLİYOR`)
.setThumbnail(client.user.avatarURL())
.setColor("BLACK")
message.channel.send(embed)
} 
  if(args[0] === 'sunucu-kur') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription('**Sunucu Kur Yardım**')
.addField('Komutlar:', 
`!yardım sunucu-kur
!normal-sunucukur
!topluluksunucusukur`)
.setThumbnail(client.user.avatarURL())
.setColor("BLACK")
message.channel.send(embed)
} 
  if(args[0] === 'moderasyon') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription('**Moderasyon Yardım**')
.addField('Komutlar:', 
`!yardım moderasyon
!otocevap
!çekiliş
!sil
!emoji-ekle
!küfürengel
!ban
!ban-log
!ban-yetkili-rol
!unban
!banlist
!mute
!muterol
!unmute
!nuke
!slowmode
!oylama
!küfürengel
!küfürlog
!mod-log
!modlog-sıfırla
!sa-as
!reklam-engel`)

.setThumbnail(client.user.avatarURL())
.setColor("BLACK")
message.channel.send(embed)
} 
  if(args[0] === 'eğlence') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription('**Eğlence Yardım**')
.addField('Komutlar:', 
`!yardım eğlence
 !duello @kullanıcı
 !yazıtura
 !afk
 !yazankazanır
 !mca mesaj
 !fakemesaj
 !banner`)
.setThumbnail(client.user.avatarURL())
.setColor("BLACK")
message.channel.send(embed)
} 
if(args[0] === 'ek-komut') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription('**Ek Komut Yardım**')
.addField('Komutlar:', 
    `!yardım ek-komut
     !istatistik
     !yapımcım`)
.setThumbnail(client.user.avatarURL())
.setColor("BLACK")
message.channel.send(embed)
} 
{
}
}


exports.conf = {
    aliases: []
}
exports.help = {
    name: "yardım",
  cooldown: 2
}