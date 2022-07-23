const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });
require('dotenv').config();
const fs= require('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.cache)
});

client.on("messageCreate", message => {
    console.log(message.content);

});

client.login(process.env.tokenSecret);