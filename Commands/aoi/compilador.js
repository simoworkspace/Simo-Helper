const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('compile')
    .setDescription('Roda um código em Aoi.js')
    .addStringOption(option =>
        option.setName('input')
            .setRequired(true)
            .setDescription('Digite algum código')
    ),
    run: async(interaction) => {
        try {
        const argu = interaction.options.getString('input');
        interaction.reply(`Entrada: \`${argu}\``)
        }catch(error) {console.log('oi')}
    },
};