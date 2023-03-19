import { Telegraf } from "telegraf";
import * as dotenv from 'dotenv';

dotenv.config();
const bot = new Telegraf(process.env.API_TOKEN);

/*
  This command generates a fair coin flip using Javascript's built-in Math.random() function, the 
  probability of getting 'heads' or 'tails' is evenly distributed 50/50.

  This command is useful for gamers that want a quick way to flip a coin, without needing a pocket Abe. 
  */
bot.command('flip', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, Math.random() < 0.5 ? 'heads' : 'tails');
})

bot.launch();
