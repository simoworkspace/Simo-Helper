const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

const db = {
    "functions": Object.values(require('../../functions.json')).flatMap(item => item)
};

const findFunc = (func) => {
    return db.functions.filter(b => b.function.toLowerCase().includes(func.toLowerCase()));
};

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = {
    data: new SlashCommandBuilder()
        .setName('wiki')
        .setDescription('Pesquisa uma função na wiki')
        .addStringOption(option =>
            option.setName('input')
                .setRequired(true)
                .setDescription('Digite algum parâmetro')
        ),
    run: (interaction, client) => {
        let argu = interaction.options.getString('input');

        const parametros = ['perm', 'aw', 'pos', 'channel', 'role', 'applicationCommand', 'add', 'embed', 'modify', 'get', 'guild', 'client', 'bot', 'ping', 'valid', 'message', 'position'];

        try {
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setTitle('🔎 Busca por função')
                        .setColor(0x0099FF)
                        .addFields({ name: `Busca: \`${argu}\``, value: findFunc(argu).map(x => { return x.function.split(`${argu}`).join(`**${argu}**`) }).join(', ') })
                ]
            });
        } catch (erro) {
            console.error(erro)
            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor(0xFF0000)
                        .setDescription(`:x: O parâmetro \`${argu}\` não foi muito específico, tente pesquisar por: \`${parametros[random(0, parametros.length)]}\`, ou qualquer coisa que se refira a alguma parte da frase da função.`)
                ]
            });
        };
    }
};