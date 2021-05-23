const Discord = require('discord.js')

exports.run = async(client, message, args) => {

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.addField('KURALLAR!', 
    `Her Sunucu'da Kurallar Olduğu Gibi Burda'da Kurallar Var. Bu Kurallar Size Daha Güzel Bir Ortama Yer Açacaktır.

  :shield: Küfür Yasaktır

:white_check_mark:  Sunucu içinde huzursuzluk çıkartıcak hareketler yapmak yasaktır.

 :shield:  Her türlü reklam yasaktır.

:white_check_mark:  Sunucuda Spam , Flood , Caps Lock Kullanımı Yasaktır.

:shield:  Sunucumuzdaki Odaları Trollemek , İnsanları Rahatsız Etmek , Sesli Odalarda Bass Açmak Yasaktır.

 :white_check_mark:  Bayan Üyeleri Rahatsız Etmek Kesinlikle Yasaktır.

  :shield: Kanalları Görevi Dışı Kullanmak Yasaktır

:white_check_mark:  Yetkili ve ya Normal Üyeyseniz Sunucuya Kişisel Olaylarınızı Taşıyamazsınız.

 :shield:  Eğer Bir Yetkili ve ya Üye Sizi Haklı Durumdayken Haksız Duruma Düşürdüyse Daha Üst Mevkide Bulunan Yetkililere Başvurun.

:lock: Sunucumuza Giren Herkes Bu  Kuralları  Okumuş Olarak Sayılacaktır Ve Gereken İşlemler  Yapılacaktır.`)
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
    name: "kurallar",
  cooldown: 10
}