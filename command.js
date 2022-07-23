const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');

const CLIENT_ID = "1000207886019993610";
const publicKey = "21a5cf92f8a33a9b6c4f780a70b22a5ca88c88a6c54cd2da3e754abeebc3d3a8";
const tokenSecret = "MTAwMDIwNzg4NjAxOTk5MzYxMA.GSxj9a.eQ66hDN5GzNrIq0hR_tbaxNuhFK2Zx7yD8o7OA";
const GUILD_ID="1000207819255058502"
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(tokenSecret);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();