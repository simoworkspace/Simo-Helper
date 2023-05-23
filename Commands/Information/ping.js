const { SlashCommandBuilder, EmbedBuilder, } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Retorna o ping do bot'),
    run: (interaction, client) => {
        const start = Date.now();
    
        const embed = new EmbedBuilder()
          .setColor(0x0099FF)
          .setDescription('Pinging...');
     
        return interaction.reply({ embeds: [embed] })
        .then(msg => {
          const end = Date.now();
     
          const embed = new EmbedBuilder()
            .setTitle('🏓 Ping')
            .setColor(0x0099FF)
            .addFields({ name: `Latência dos seguintes:`, value: `> **Api**: \`${interaction.client.ws.ping}\`ms\n> **Bot**: \`${end - start}\`ms`, inline: true })
     
          msg.edit({ embeds: [embed] })
        })
    }
};
