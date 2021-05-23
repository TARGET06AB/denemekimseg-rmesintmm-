const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("dnd");
  console.log(
    `                                                                                                                             `
  ) ||
    client.user
      .setActivity(`!yardım`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/06target06"
      })
      .then(presence =>
        console.log(
          `Your Status has been set to  ${
            presence.game ? presence.game.none : "none"
          }`
        )
      )
      .catch(console.error);

  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Şu an ` +
      client.channels.cache.size +
      ` adet kanala, ` +
      client.guilds.cache.size +
      ` adet sunucuya ve ` +
      client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString() +
      ` kullanıcıya hizmet veriliyor!`
  );
};
