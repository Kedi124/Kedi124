const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'message') {
    await interaction.reply('messsage !');
  }
});

client.login('HG7271hh72hdh7272hhdsh664JEık27OlermWagI23151fgGHf');






İS KEDİ BACK 
