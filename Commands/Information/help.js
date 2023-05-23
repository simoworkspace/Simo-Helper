const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Retorna os comandos utilizaveis do bot'),
    run: (interaction, client) => {
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle('🔎 Menu de ajuda')
                    .setDescription('Aqui está minha lista de comandos:')
                    .addFields({ name: 'Comandos Aoi.js', value: '</aoi:1105219994469543947>, </tag:1106316724430708736>, </wiki:1106282979036254319>, </compile:1106303153349087404>' })
                    .addFields({ name: 'Comandos Variados', value: '</ping:1105210087359918175>' })
                    .setColor(0x0099FF)
            ]
        });
    }
};