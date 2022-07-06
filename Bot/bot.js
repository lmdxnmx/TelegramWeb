const { Telegraf } = require("telegraf");
const TOKEN = "5548558620:AAEprDQ4FLMAjVZwpr5NAv_KDSdZvwRWBhc";
const bot = new Telegraf(TOKEN);

const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Добро пожаловать", {
    reply_markup: {
      keyboard: [[{ text: "тгВеб", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
