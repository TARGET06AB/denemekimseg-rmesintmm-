const Discord = require("discord.js"); 

const client = new Discord.Client();
const  db = require("quick.db");

exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) 
  return message.channel.send(
new Discord.MessageEmbed()
  .setThumbnail(client.user.avatarURL())
  .setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}normal-sunucukur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`)
  .addField('Sunucu Sahibi;', `${message.guild.owner.user.tag} \n\n Daha Önce **${db.fetch(`normalsunucusukur`)}** Kişi Sunucu Kurmuş `)
  .setImage('https://cdn.discordapp.com/attachments/783570845481828402/828898597848219648/unknown.png')

  );
message.channel.send(new Discord.MessageEmbed()
.setTitle('Normal Sunucusu Kurma')
.setThumbnail('https://cdn.discordapp.com/avatars/686185592899633200/6499d2f1c46b106eed1e25892568aa55.webp?size=512')
.setFooter(`Ping: ${client.ws.ping.toFixed(0)}`, client.user.avatarURL({dynamic: true}))
.setDescription(`${message.author} **Sunucunun** kurulmasını onaylıyor musun? 😇

**Dipnot:** Bazı kanllar silinmemiş gibi görünebilir. Discord dan çıkıp girin düzelir.`)).then(resulter => {
resulter.react('✅').then(() => resulter.react('❌'));

const yesFilter = (reaction, user) => { return reaction.emoji.name === '✅' && user.id === message.guild.owner.user.id; };
const yes = resulter.createReactionCollector(yesFilter, { time: 0 });
const noFilter = (reaction, user) => { return reaction.emoji.name === '❌' && user.id === message.guild.owner.user.id; };
const no = resulter.createReactionCollector(noFilter, { time: 0 });

yes.on('collect', async reaction => {
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ok boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());
  
message.guild.roles.create({ data: { name: '💎 | Sunucu Sahip' }, reason: 'ayn' }).then(role => {role.setPermissions(['ADMINISTRATOR']);role.setColor('#ff0000');});
message.guild.roles.create({ data: { name: '🌺 | Genel Sorumlu' }, reason: 'ayn' }).then(role => {role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'KICK_MEMBERS', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);role.setColor('#49ff00');});
message.guild.roles.create({ data: { name: '💮 | Yönetici' } , reason: 'ayn'}).then(role => {role.setPermissions(['MANAGE_GUILD', 'MANAGE_ROLES', 'MANAGE_NICKNAMES', 'MANAGE_MESSAGES', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS']);role.setColor('#ff4000  ');});
message.guild.roles.create({ data: { name: '・🔨 | Partner Sorumlusu' }, reason: 'ayn' }).then(s => s.setColor('#FF4D00'))
message.guild.roles.create({ data: { name: '💸 | Booster' }, reason: 'ayn' }).then(s => s.setColor('#FF77FF'))
message.guild.roles.create({ data: { name: '🎑 | Developer' }, reason: 'ayn' }).then(s => s.setColor('#FFCC00'))
message.guild.roles.create({ data: { name: '🌻 | Family' }, reason: 'ayn' }).then(s => s.setColor('##FF8C69'))
message.guild.roles.create({ data: { name: '⚜ | Partner' }, reason: 'ayn' }).then(s => s.setColor('#002FA7'))
message.guild.roles.create({ data: { name: '🌌 | Kız' }, reason: 'ayn' }).then(s => s.setColor('#d300ff'))
message.guild.roles.create({ data: { name: '🌃 | Erkek' }, reason: 'ayn' }).then(s => s.setColor('#0000FF'))
message.guild.roles.create({ data: { name: '🛡 | Discord Bot' }, reason: 'ayn' }).then(s => s.setColor('#955aab'))

message.guild.channels.create('||---- Önemli!! ----||', {type: 'category'}).then(parent => {
message.guild.channels.create('BU SUNUCUNUN TASARIMI ARAGORN#5311 TARAFINDAN YAPILMIŞTIR', {type: 'text'}).then(c => c.setParent(parent.id));
});
  
message.guild.channels.create('||---- Sunucu Genel ----||', {type: 'category'}).then(parent => {
message.guild.channels.create('📜kurallar', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📢duyuru', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('||---- Sunucu Lobi ----||', {type: 'category'}).then(parent => {
message.guild.channels.create('💬genel-sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🤖komutlar', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('||---- Para İşlemleri ----||', {type: 'category'}).then(parent => {
message.guild.channels.create('💰banka', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🛒market', {type: 'text'}).then(c => c.setParent(parent.id));
});

message.guild.channels.create('||---- Sesli Lobi ----||', {type: 'category'}).then(parent => {
message.guild.channels.create('🔊Genel Sohbet',  {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(4));
;
  message.guild.channels.create('||---- Moderasyon ----||', {type: 'category'}).then(parent => {
message.guild.channels.create('denetim-kaydı', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('moderatör-sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('Moderatör Sohbet',  {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(4));
  });
    message.guild.channels.create('||---- Müzik Kanalları ----||', {type: 'category'}).then(parent => {
message.guild.channels.create('🎶Müzik-1',  {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(99));
message.guild.channels.create('🎶Müzik-2',  {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(99));
message.guild.channels.create('🎶Müzik-3',  {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(99));
    });  
message.guild.channels.create('||---- Oyun Odaları----||', {type: 'category'}).then(parent => {
message.guild.channels.create('🎮oyun-sohbet', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💥bom', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('👍tuttu-tutmadı👎', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔢sayı-saymaca', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎮Oyun-1',  {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(99));
message.guild.channels.create('🎮Oyun-2',  {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(3));
message.guild.channels.create('🎮Oyun-3',  {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(4));
});
message.guild.channels.create('||---- AFK ----||', {type: 'category'}).then(parent => {
message.guild.channels.create('💤AFK',  {type: 'voice'}).then(a => a.setParent(parent.id) && a.setUserLimit(99));
});
db.add(`sunucukur2`, 1)
});



});

no.on('collect', async reaction => {
resulter.delete();
});

})


};



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3,
   
};

exports.help = {
  name: 'topluluksunucusukur',
  cooldown: 10
 
};