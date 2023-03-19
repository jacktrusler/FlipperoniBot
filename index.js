import { Telegraf } from "telegraf";
import * as dotenv from 'dotenv';

dotenv.config();
const bot = new Telegraf(process.env.API_TOKEN);

bot.command('flip', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, Math.random() < 0.5 ? 'heads' : 'tails');
})

bot.launch();
